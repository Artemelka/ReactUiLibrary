import { createSelector } from 'reselect';
import { APP_LOADER_REDUCER_KEY, initialState } from './reducer';
import { AppLoaderState } from './types';
import { AppState } from '../../../types';

export const appLoaderStoreSelector = (state: AppState): AppLoaderState =>
    state[APP_LOADER_REDUCER_KEY] || initialState;

export const appLoaderIsLoadingSelector = createSelector(
    appLoaderStoreSelector,
    (state) => state.isLoading
);
