import { Action } from 'redux';
import { APP_LOADER_ACTIONS, initialState } from './constants';
import { AppLoaderState, StoreKeys } from './types';

export const appLoaderReducer = (state: AppLoaderState = initialState, { type }: Action<string>) => {
    switch (type) {
        case APP_LOADER_ACTIONS.SET_LOADING_START:
            return ({
                ...state,
                [StoreKeys.IS_LOADING]: true
            });
        case APP_LOADER_ACTIONS.SET_LOADING_STOP:
            return ({
                ...state,
                [StoreKeys.IS_LOADING]: false
            });
        default:
            return state;
    }
};
