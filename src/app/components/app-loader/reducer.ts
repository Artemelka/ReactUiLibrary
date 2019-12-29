import { AnyAction } from 'redux';
import { APP_LOADER_ACTIONS, initialState } from './constants';
import { AppLoaderState, StoreKeys } from './types';

const changeLoadingState = (state: AppLoaderState, payload: boolean): AppLoaderState => ({
    ...state,
    [StoreKeys.IS_LOADING]: payload
});

export const appLoaderReducer = (state: AppLoaderState = initialState, { type, payload }: AnyAction) => {
    switch (type) {
        case APP_LOADER_ACTIONS.CHANGE_STATE:
            return changeLoadingState(state, payload);
        default:
            return state;
    }
};
