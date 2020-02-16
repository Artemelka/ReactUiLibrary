import { APP_LOADER_REDUCER_KEY } from './constants';
import { StoreKeys } from './types';
import { AppState } from '../../types';

export const appLoaderIsLoadingSelector = (state: AppState): boolean =>
    state[APP_LOADER_REDUCER_KEY][StoreKeys.IS_LOADING];
