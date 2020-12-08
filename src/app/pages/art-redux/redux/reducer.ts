import { BaseAction } from 'services';
import { COUNT_PLUS_ACTION, SET_ASYNC_STORE_ACTION } from './actions';

export const initialState = {
    count: 0
};
export const testReducer = (store  = initialState, { type, payload }: BaseAction) => {
    console.log('=== testReducer ===', type);
    switch (type) {
        case COUNT_PLUS_ACTION:
            return { ...store, count: store.count + 1 };
        default:
            return store;
    }
};

export const initialAsyncState = {
    a: ''
};
export const testInjectReducer = (store  = initialAsyncState, { type, payload }: BaseAction) => {
    console.log('=== testInjectReducer ===', type);
    switch (type) {
        case SET_ASYNC_STORE_ACTION:
            return { ...store, a: payload };
        default: return store;
    }
};
