import { APP_LOADER_ACTIONS } from './constants';
import { AppLoaderAction } from './types';

export const changeAppLoaderState = (isLoading: boolean): AppLoaderAction<boolean> => ({
    type: APP_LOADER_ACTIONS.CHANGE_STATE,
    payload: isLoading
});
