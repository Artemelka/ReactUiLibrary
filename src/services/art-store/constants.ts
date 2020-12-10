import { nameSpaceCreator } from 'services';

const ROOT_STORE_REDUCER_NAME = 'rootStore';
export const ROOT_STORE_REDUCER_SYMBOL = Symbol(ROOT_STORE_REDUCER_NAME);

// ACTIONS
export const INIT_STORE_ACTION = 'INIT_STORE_ACTION';
export const INIT_REDUCER_ACTION = 'INIT_REDUCER_ACTION';
export const INJECT_REDUCER_ACTION = 'INJECT_REDUCER_ACTION';
export const INJECT_SAGA_ACTION = 'INJECT_SAGA_ACTION';
export const REMOVE_REDUCER_ACTION = 'REMOVE_REDUCER_ACTION';
export const REMOVE_SAGA_ACTION = 'REMOVE_SAGA_ACTION';

export type ActionName = {
    [INIT_STORE_ACTION]: string;
    [INIT_REDUCER_ACTION]: string;
    [INJECT_REDUCER_ACTION]: string;
    [INJECT_SAGA_ACTION]: string;
    [REMOVE_REDUCER_ACTION]: string;
    [REMOVE_SAGA_ACTION]: string;
};

export const ACTIONS = nameSpaceCreator<ActionName>(ROOT_STORE_REDUCER_NAME)([
    INIT_STORE_ACTION,
    INIT_REDUCER_ACTION,
    INJECT_REDUCER_ACTION,
    INJECT_SAGA_ACTION,
    REMOVE_REDUCER_ACTION,
    REMOVE_SAGA_ACTION
]);

// ERRORS
export const SAGA_RUN_ERROR = 'Before running a Saga, you must mount the Saga middleware on the Store and add field "runSaga" in createStoreConfig';
export const SUBSCRIBE_ERROR = 'Subscribe callback must be a function';
