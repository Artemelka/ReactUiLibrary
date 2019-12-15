import React, { Component, ComponentType, FC } from 'react';
import { Reducer, Store, StoreEnhancer, StoreCreator } from 'redux';

// type DeepPartial<T> = {
//     [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
// };
//
// type Action<T = any> = {
//     type: T
// };
//
// type AnyAction = Action & {
//     [extraProps: string]: any
// };
//
// type Dispatch<A extends Action = AnyAction> = <T extends A>(action: T) => T;
//
// type Unsubscribe = () => void;
//
// type Observer<T> = {
//     next?(value: T): void
// };
//
// type Observable<T> = {
//     subscribe: (observer: Observer<T>) => { unsubscribe: Unsubscribe }
//     [Symbol.observable](): Observable<T>
// };
//
// type Store<S = any, A extends Action = AnyAction> = {
//     dispatch: Dispatch<A>;
//     getState(): S;
//     subscribe(listener: () => void): Unsubscribe;
//     replaceReducer(nextReducer: Reducer<S, A>): void;
//     [Symbol.observable](): Observable<S>;
// };
//
// type Reducer<S = any, A extends Action = AnyAction> = (
//     state: S | undefined,
//     action: A
// ) => S;
//
// type StoreEnhancerStoreCreator<Ext = {}, StateExt = {}> = <
//     S = any,
//     A extends Action = AnyAction
//     >(
//     reducer: Reducer<S, A>,
//     preloadedState?: DeepPartial<S>
// ) => Store<S & StateExt, A> & Ext;
//
// type StoreEnhancer<Ext = {}, StateExt = {}> = (
//     next: StoreEnhancerStoreCreator
// ) => StoreEnhancerStoreCreator<Ext, StateExt>;
//
// type StoreCreator = {
//     <S, A extends Action, Ext, StateExt>(
//         reducer: Reducer<S, A>,
//         enhancer?: StoreEnhancer<Ext, StateExt>
//     ): Store<S & StateExt, A> & Ext
//     <S, A extends Action, Ext, StateExt>(
//         reducer: Reducer<S, A>,
//         preloadedState?: DeepPartial<S>,
//         enhancer?: StoreEnhancer<Ext>
//     ): Store<S & StateExt, A> & Ext
// };

type AsyncReducerMap = Record<string, Reducer>;
type CreateReducer = (asyncReducers?: AsyncReducerMap) => Reducer;
type AsyncReducerItem = {
    name: string,
    reducer: Reducer,
    rewritable?: boolean
};

export const createStoreWithInsertReducer = (
    reduxCreateStore: StoreCreator,
    createReducer: CreateReducer,
    middleWares: StoreEnhancer,
    withRemove?: boolean
) => {
    const createdStore: Store = reduxCreateStore(createReducer(), middleWares);
    const asyncReducersMap: AsyncReducerMap = {};

    const injectReducer = (asyncReducers: Array<AsyncReducerItem>) => {
        const replacedReducerNames: Array<string> = [];

        asyncReducers.forEach(({ name, reducer, rewritable }: AsyncReducerItem) => {
            if (asyncReducersMap[name]) {
                if (!rewritable) {
                    return;
                }

                createdStore.dispatch({ type: 'REWRITE_ASYNC_REDUCER', payload: name });
                console.warn(`The reducer ${name} is being replaced with a new async reducer`);
            }

            asyncReducersMap[name] = reducer;
            replacedReducerNames.push(name);
        });

        if (replacedReducerNames.length) {
            createdStore.replaceReducer(createReducer(asyncReducersMap));
            createdStore.dispatch({ type: 'INJECT_ASYNC_REDUCER', payload: replacedReducerNames.join('; ') });
            replacedReducerNames.length = 0;
        }
    };

    const deleteReducer = (asyncReducers: Array<AsyncReducerItem>) => {
        const replacedReducerNames: Array<string> = [];

        asyncReducers.forEach(({ name }) => {
            if (asyncReducersMap[name]) {
                delete asyncReducersMap[name];
                replacedReducerNames.push(name);
            } else {
                console.warn(`The reducer ${name} is not found in asyncReducers`);
            }
        });

        if (replacedReducerNames.length) {
            createdStore.replaceReducer(createReducer(asyncReducersMap));
            createdStore.dispatch({ type: 'REMOVE_ASYNC_REDUCER', payload: replacedReducerNames.join('; ') });
            replacedReducerNames.length = 0;
        }
    };

    const insertReducer = (asyncReducers: Array<AsyncReducerItem>) =>
        (RenderComponent: ComponentType | FC) => {
            injectReducer(asyncReducers);

            return RenderComponent;
        };

    const insertWithRemoveReducer = (asyncReducers: Array<AsyncReducerItem>) =>
        (RenderComponent: ComponentType | FC) => (
            class InsertReducerContainer extends Component {
                componentDidMount(): void {
                    injectReducer(asyncReducers);
                }

                componentWillUnmount(): void {
                    deleteReducer(asyncReducers);
                }

                render () {
                    return <RenderComponent {...this.props} />;
                }
            }
        );

    return ({
        store: createdStore,
        insertReducer: withRemove ? insertWithRemoveReducer : insertReducer
    });
};
