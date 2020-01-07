import React, { Component, ComponentType, FC } from 'react';
import { Reducer, Store, StoreEnhancer, StoreCreator } from 'redux';

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
