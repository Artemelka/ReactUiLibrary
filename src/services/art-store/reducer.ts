import { ACTIONS, ROOT_STORE_REDUCER_SYMBOL } from './constants';
import { BaseAction, Store } from './types';

type RootStore = {
    injectedSagas: Array<string>;
};
const initialStore: RootStore = {
    injectedSagas: []
};
export const ROOT_REDUCER = {
    [ROOT_STORE_REDUCER_SYMBOL]: (store: RootStore = initialStore, { type, payload }: BaseAction) => {
        switch (type) {
            case ACTIONS.INJECT_SAGA_ACTION:
                return {
                    ...store,
                    injectedSagas: [...store.injectedSagas, payload]
                };
            case ACTIONS.REMOVE_SAGA_ACTION:
                return {
                    ...store,
                    injectedSagas: store.injectedSagas.filter(name => name !== payload)
                };
            default:
                return store;
        }
    }
};
