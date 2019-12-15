import React, { Component, ComponentType, FC } from 'react';
import { createStore, Reducer, Store, StoreEnhancer } from 'redux';


type HocComponent = (RenderComponent: ComponentType | FC) => ComponentType | FC;
type InsertWithRemoveReducer = (asyncReducers: Array<AsyncReducerItem>) => HocComponent;
type AsyncReducer = Record<string, Reducer>;
type InsertReducer = (asyncReducers: Array<AsyncReducerItem>) => HocComponent;
type ExtendedStore = Store & {
    asyncReducers?: AsyncReducer;
    insertReducer?: InsertReducer;
    insertWithRemoveReducer?: InsertWithRemoveReducer;
};
type AsyncReducerItem = {
    name: string,
    reducer: Reducer,
    replaced?: boolean
};

export const createdStoreWithInsertAndDeleteReducer = (reducer: (asyncReducers?: AsyncReducer) => Reducer, middleWares: StoreEnhancer) => {
    const createdStore: ExtendedStore = createStore(reducer(), middleWares);

    const injectReducer = (store: ExtendedStore, asyncReducers: Array<AsyncReducerItem>) => {
        let isReplace = false;

        asyncReducers.forEach(({ name, reducer, replaced }) => {
            if (createdStore.asyncReducers[name]) {
                if (!replaced) {
                    return;
                }

                createdStore.dispatch({ type: 'REWRITE_ASYNC_REDUCER', payload: name });
                console.warn(`The reducer ${name} is being replaced with a new async reducer`);
            }

            createdStore.asyncReducers[name] = reducer;
            isReplace = true;
        });

        if (isReplace) {
            createdStore.dispatch({ type: 'INJECT_ASYNC_REDUCER' });
            createdStore.replaceReducer(reducer(createdStore.asyncReducers));
            isReplace = false;
        }
    };

    const deleteReducer = (store: ExtendedStore, asyncReducers: Array<AsyncReducerItem>) => {
        asyncReducers.forEach(({ name }) => {
            if (createdStore.asyncReducers[name]) {
                delete createdStore.asyncReducers[name];
            } else {
                console.warn(`The reducer ${name} is not found in asyncReducers`);
            }
        });

        createdStore.replaceReducer(reducer(createdStore.asyncReducers));
    };

    createdStore.asyncReducers = {};

    createdStore.insertReducer = (asyncReducers: Array<AsyncReducerItem>) =>
        (RenderComponent: ComponentType | FC) => {
            injectReducer(createdStore, asyncReducers);

            return RenderComponent;
        };

    createdStore.insertWithRemoveReducer = (asyncReducers: Array<AsyncReducerItem>) =>
        (RenderComponent: ComponentType | FC) => (
            class InsertReducerContainer extends Component {
                componentDidMount(): void {
                    injectReducer(createdStore, asyncReducers);
                }

                componentWillUnmount(): void {
                    deleteReducer(createdStore, asyncReducers);
                }

                render () {
                    return <RenderComponent {...this.props} />;
                }
            }
        );

    return createdStore;
};
