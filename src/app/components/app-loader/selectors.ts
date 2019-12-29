import { APP_LOADER_REDUCER_KEY } from './constants';
import { AppLoaderState, StoreKeys } from './types';

export const appLoaderIsLoadingSelector = (state: Record<string, any> & AppLoaderState): boolean =>
    state[APP_LOADER_REDUCER_KEY][StoreKeys.IS_LOADING];
