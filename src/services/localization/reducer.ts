import { AnyAction } from 'redux';
import { initialState, LOCALIZATION_ACTIONS, StoreKeys } from './constants';
import { LocalizationState } from './types';

export const localizationReducer = (state: LocalizationState = initialState, { payload, type}: AnyAction) => {
    switch (type) {
        case LOCALIZATION_ACTIONS.CHANGE_LOCALE:
            return ({
                ...state,
                [StoreKeys.ACTIVE_LOCALE]: payload
            });
        case LOCALIZATION_ACTIONS.ADD_DICTIONARY:
            return ({
                ...state,
                [StoreKeys.DICTIONARY]: payload
            });
        case LOCALIZATION_ACTIONS.START_LOADING:
            return ({
                ...state,
                [StoreKeys.IS_LOADING]: payload,
                [StoreKeys.LOADING_COUNT]: state[StoreKeys.LOADING_COUNT] + 1
            });
        case LOCALIZATION_ACTIONS.STOP_LOADING:
            return ({
                ...state,
                [StoreKeys.IS_LOADING]: payload,
                [StoreKeys.LOADING_COUNT]: state[StoreKeys.LOADING_COUNT] - 1
            });
        case LOCALIZATION_ACTIONS.ADD_LOCALES:
            return ({
                ...state,
                [StoreKeys.LOCALES]: payload
            });
        case LOCALIZATION_ACTIONS.ADD_LABELS:
            return ({
                ...state,
                [StoreKeys.LABELS]: payload
            });
        case LOCALIZATION_ACTIONS.INIT_STORE:
            return ({
                ...state,
                ...payload
            });
        default:
            return state;
    }
};
