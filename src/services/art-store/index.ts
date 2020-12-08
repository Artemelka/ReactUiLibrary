import { checkAction, checkReducer, checkReducesInStore } from './utils';
import { Action, ArtStore, ArtStoreConfig, InjectReducerParams, Reducer, Store, SubscribeAction } from './types';

export function createArtStore(config: ArtStoreConfig): ArtStore {
    let subscribers: Array<SubscribeAction> = [];
    let reducers: Record<string, Reducer> = { ...config.reducers };

    const getState = () => Object.entries(reducers).reduce((acc: Store, [key, reducer]: [string, Reducer]): Store => {
        checkReducer(reducer, key);

        return ({...acc, [key]: reducer(undefined, { type: 'INIT_STORE' }) });
    }, {});

    let store: Store = getState();

    const updateStore = (nextStorePart: Store) => {
        store = { ...store, ...nextStorePart };

        subscribers.forEach(cb => cb({ ...store }));
    };

    return ({
        dispatch: (action: Action) => {
            checkAction(action);

            const { reducerName, type, payload } = action;

            checkReducesInStore(reducers, reducerName);
            updateStore({ [reducerName]: reducers[reducerName](store[reducerName], { type, payload }) });
        },

        getState: (): Store => store,

        subscribe: (cb: SubscribeAction) => {
            if (typeof cb !== 'function') {
                throw new Error('Subscribe callback must be a function');
            }

            subscribers.push(cb);
        },

        unsubscribe: (cb: SubscribeAction) => {
            if (typeof cb !== 'function') {
                throw new Error('Subscribe callback must be a function');
            }

            subscribers = subscribers.filter(callback => callback !== cb);
        },

        injectReducers: (asyncReducers: Array<InjectReducerParams>) => {
            reducers = asyncReducers.reduce((acc, { name, reducer })  => {
                checkReducer(reducer, name);

                return ({
                    ...acc,
                    [name]: reducer
                });
            }, reducers);

            store = getState();
        }
    });
}
