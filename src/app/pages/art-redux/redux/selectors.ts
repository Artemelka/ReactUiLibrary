import { createSelector } from 'reselect';
import { TEST_REDUCER_NAME, ASYNC_REDUCER_NAME } from './constants';
import { initialState, initialAsyncState } from './reducer';

const testStoreSelector = (state: Record<string, any>) => state[TEST_REDUCER_NAME] || initialState;

const AsyncStoreSelector = (state: Record<string, any>) => state[ASYNC_REDUCER_NAME] || initialAsyncState;

export const countSelector = createSelector(
    testStoreSelector,
    (store) => store.count
);

export const valueSelector = createSelector(
    AsyncStoreSelector,
    (state) => state.a
);

export const valueBSelector = createSelector(
    AsyncStoreSelector,
    (state) => state.b
);
