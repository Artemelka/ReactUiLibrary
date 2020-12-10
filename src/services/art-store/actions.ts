import { ACTIONS, INJECT_REDUCER_ACTION, ROOT_STORE_REDUCER_SYMBOL } from './constants';
import { Action, BaseAction } from './types';

export const initStoreAction = () => ({
    type: ACTIONS.INIT_STORE_ACTION,
    reducerName: ROOT_STORE_REDUCER_SYMBOL
});

export const initReducerAction = (): BaseAction => ({
    type: ACTIONS.INIT_REDUCER_ACTION
});

export const injectReducerAction = (name: string): Action => ({
    type: ACTIONS.INJECT_REDUCER_ACTION,
    reducerName: name
});

export const injectSagaAction = (name: string): Action<symbol> => ({
    type: ACTIONS.INJECT_SAGA_ACTION,
    reducerName: ROOT_STORE_REDUCER_SYMBOL,
    payload: name
});

export const removeReducerAction = (name: string): Action => ({
    type: ACTIONS.REMOVE_REDUCER_ACTION,
    reducerName: name
});

export const removeSagaAction = (name: string): Action<symbol> => ({
    type: ACTIONS.REMOVE_SAGA_ACTION,
    reducerName: ROOT_STORE_REDUCER_SYMBOL,
    payload: name
});
