import {
    initStoreAction,
    initReducerAction,
    injectReducerAction,
    injectSagaAction,
    removeReducerAction,
    removeSagaAction
} from './actions';
import { ROOT_REDUCER } from './reducer';
import { checkAction, getStorePartFromReducer, checkReducesInStore } from './utils';
import { SAGA_RUN_ERROR, SUBSCRIBE_ERROR } from './constants';
import {
    Action,
    ArtStore,
    ArtStoreConfig,
    AsyncSagasMap,
    InjectReducerParams,
    InjectSagaParams,
    Reducer,
    Store,
    SubscribeAction
} from './types';

export function createArtStore({ reducers, middlewares = [], runSaga }: ArtStoreConfig): ArtStore {
    let subscribers: Array<SubscribeAction> = [];
    const storeSagas: AsyncSagasMap = {};
    const storeReducers: Record<string, Reducer> = { ...reducers, ...ROOT_REDUCER };

    const store: Store = Object.keys(storeReducers).reduce((acc, name) => ({
        ...acc,
        [name]: getStorePartFromReducer({
            action: initReducerAction(),
            name,
            reducer: storeReducers[name]
        })
    }), {});

    const updateStore = ({ reducerName, type, payload }: Action) => {
        store[reducerName] = getStorePartFromReducer({
            action: { type, payload },
            name: reducerName,
            prevStore: store[reducerName],
            reducer: storeReducers[reducerName]
        });
    };

    const applyMiddleware = (middlewares: Array<any>, updater: (action: Action) => void) =>
        middlewares.reduceRight((res, middleware) => middleware({ getState, dispatch })(res), updater);

    // public

    function batchDispatch(actions: Array<Action>) {
        actions.forEach(action => {
            if (checkAction(action) && checkReducesInStore(storeReducers, action.reducerName)) {
                applyMiddleware(middlewares, updateStore)(action);
            }
        });
        subscribers.forEach(cb => cb({ ...store }));
    }

    function dispatch(action: Action<string | symbol>) {
        if (checkAction(action) && checkReducesInStore(storeReducers, action.reducerName)) {
            applyMiddleware(middlewares, updateStore)(action);
            subscribers.forEach(cb => cb({ ...store }));
        }
    }

    function getState(): Store {
        return { ...store };
    }

    function injectReducers(asyncReducers: Array<InjectReducerParams>) {
        asyncReducers.forEach(({ name, reducer }) => {
            storeReducers[name] = reducer;
            dispatch(injectReducerAction(name));
        });
    }

    function injectSagas(asyncSagas: Array<InjectSagaParams>) {
        if (Boolean(runSaga)) {
            asyncSagas.forEach(({ name, saga, args }: InjectSagaParams) => {
                storeSagas[name] = runSaga(saga, args);
                dispatch(injectSagaAction(name));
            });
        } else {
            console.error(SAGA_RUN_ERROR);
        }
    }

    function removeReducers(asyncReducers: Array<InjectReducerParams>) {
        asyncReducers.forEach(({ name }: InjectReducerParams) => {
            if (storeReducers[name]) {
                dispatch(removeReducerAction(name));
                delete store[name];
                delete storeReducers[name];
            } else {
                console.error(`The reducer ${name} is not found in store`);
            }
        });
    }

    function removeSagas(asyncSagas: Array<InjectSagaParams>) {
        if (Boolean(runSaga)) {
            asyncSagas.forEach(({ name }: InjectSagaParams) => {
                if (storeSagas[name]) {
                    storeSagas[name].cancel();
                    delete storeSagas[name];
                    dispatch(removeSagaAction(name));
                } else {
                    console.error(`The saga ${name} is not found in asyncSagas`);
                }
            });
        } else {
            console.error(SAGA_RUN_ERROR);
        }
    }

    function subscribe(cb: SubscribeAction): void {
        if (typeof cb !== 'function') {
            console.error(SUBSCRIBE_ERROR);
            return;
        }

        subscribers.push(cb);
    }

    function unsubscribe(cb: SubscribeAction): void {
        if (typeof cb !== 'function') {
            console.error(SUBSCRIBE_ERROR);
            return;
        }

        subscribers = subscribers.filter(callback => callback !== cb);
    }

    dispatch(initStoreAction());

    return {
        batchDispatch,
        dispatch,
        getState,
        injectReducers,
        injectSagas,
        removeReducers,
        removeSagas,
        subscribe,
        unsubscribe
    };
}
