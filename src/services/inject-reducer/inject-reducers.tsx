import React, { Component, ComponentType, FC } from 'react';
import { Reducer, Store } from 'redux';
import { Saga, RunSagaOptions, Task } from 'redux-saga';

type AsyncReducerMap = Record<string, Reducer>;
type AsyncSagasMap = Record<string, Task>;
type ReactComponent = ComponentType | FC;
type AppStore = Store & {
    appReducer?: (asyncReducers?: AsyncReducerMap) => Reducer;
    runSaga?: (saga: Saga, options: RunSagaOptions<string, Store>) => Task;
};
type AsyncReducerItem = {
    name: string,
    reducer: Reducer,
    rewritable?: boolean
};
type AsyncSagaItemType = {
    args?: RunSagaOptions<string, Store>;
    saga: Saga;
    name: string;
};
type InjectReducerAndSagaParamsType = {
    asyncReducers?: Array<AsyncReducerItem>;
    asyncSagas?: Array<AsyncSagaItemType>
};
type InjectReducerAndSagaType = (params: InjectReducerAndSagaParamsType) =>
    (component: ReactComponent) => ReactComponent;
type CreateInjectReducerAndSagaParamsType = {
    store: AppStore;
    withEjectReducers?: boolean;
};

export const createInjectReducerAndSagas = ({
    store,
    withEjectReducers = false
}: CreateInjectReducerAndSagaParamsType): InjectReducerAndSagaType => {
    const asyncReducersMap: AsyncReducerMap = {};
    const asyncSagasMap: AsyncSagasMap = {};

    const injectReducers = (asyncReducers: Array<AsyncReducerItem>) => {
        const replacedReducerNames: Array<string> = [];

        asyncReducers.forEach(({ name, reducer, rewritable }: AsyncReducerItem) => {
            if (asyncReducersMap[name]) {
                if (!rewritable) {
                    return;
                }

                store.dispatch({ type: '@@injectReducer/REWRITE_ASYNC_REDUCER', payload: name });
                console.warn(`The reducer ${name} is being replaced with a new async reducer`);
            }

            asyncReducersMap[name] = reducer;
            replacedReducerNames.push(name);
        });

        if (replacedReducerNames.length) {
            store.replaceReducer(store.appReducer(asyncReducersMap));
            store.dispatch({ type: '@@injectReducer/INJECT_ASYNC_REDUCER', payload: replacedReducerNames.join('; ') });
            replacedReducerNames.length = 0;
        }
    };

    const ejectReducers = (asyncReducers: Array<AsyncReducerItem>) => {
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
            store.replaceReducer(store.appReducer(asyncReducersMap));
            store.dispatch({ type: '@@injectReducer/REMOVE_ASYNC_REDUCER', payload: replacedReducerNames.join('; ') });
            replacedReducerNames.length = 0;
        }
    };

    const injectSagas = (asyncSagas: Array<AsyncSagaItemType>) => {
        const addedSagaNames: Array<string> = [];

        asyncSagas.forEach(({ name, saga, args }: AsyncSagaItemType) => {
            asyncSagasMap[name] = store.runSaga(saga, args);
            addedSagaNames.push(name);
        });

        if (addedSagaNames.length) {
            store.dispatch({ type: '@@injectSaga/INJECT_ASYNC_SAGAS', payload: addedSagaNames.join('; ') });
            addedSagaNames.length = 0;
        }

    };

    const ejectSagas = (asyncSagas: Array<AsyncSagaItemType>) => {
        const removedSagaNames: Array<string> = [];

        asyncSagas.forEach(({ name }: AsyncSagaItemType) => {
            if (asyncSagasMap[name]) {
                asyncSagasMap[name].cancel();
                delete asyncSagasMap[name];
                removedSagaNames.push(name);
            } else {
                console.warn(`The saga ${name} is not found in asyncSagas`);
            }
        });

        if (removedSagaNames.length) {
            store.dispatch({ type: '@@injectSaga/REMOVE_ASYNC_SAGAS', payload: removedSagaNames.join('; ') });
            removedSagaNames.length = 0;
        }
    };

    return ({ asyncReducers = [], asyncSagas = [] }: InjectReducerAndSagaParamsType) =>
        (RenderComponent: ComponentType | FC) => (
            class InsertReducerContainer extends Component<Record<string, any>> {
                static displayName = `InsertReducersAndSagas${RenderComponent.displayName || RenderComponent.name}Container`;

                constructor(props: Record<string, any>) {
                    super(props);
                    injectReducers(asyncReducers);
                    injectSagas(asyncSagas);
                }

                componentWillUnmount(): void {
                    if (withEjectReducers) {
                        ejectReducers(asyncReducers);
                    }

                    ejectSagas(asyncSagas);
                }

                render () {
                    return <RenderComponent {...this.props} />;
                }
            }
        );
};
