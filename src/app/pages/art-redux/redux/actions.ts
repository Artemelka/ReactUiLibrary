import { TEST_REDUCER_NAME, ASYNC_REDUCER_NAME } from './constants';

export const COUNT_PLUS_ACTION = 'COUNT_PLUS_ACTION';
export const countPlusAction = () => ({
    reducerName: TEST_REDUCER_NAME,
    type: COUNT_PLUS_ACTION
});

export const SET_ASYNC_STORE_ACTION = 'SET_ASYNC_STORE_ACTION';
export const setStoreAction = (payload: string) => ({
    reducerName: ASYNC_REDUCER_NAME,
    type: SET_ASYNC_STORE_ACTION,
    payload
});
