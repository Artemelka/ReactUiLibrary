import { Action } from 'redux';
import { APP_LOADER_ACTIONS } from './constants';

export const setAppLoaderStart = (): Action<string> => ({
    type: APP_LOADER_ACTIONS.SET_LOADING_START
});

export const setAppLoaderStop = (): Action<string> => ({
    type: APP_LOADER_ACTIONS.SET_LOADING_STOP
});
