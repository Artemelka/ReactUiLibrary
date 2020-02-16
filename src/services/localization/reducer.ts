import { AnyAction } from 'redux';
import { initialState, LOCALIZATION_ACTIONS, StoreKeys } from './constants';
import { LocalizationState } from './types';

const addDictionary = (state: LocalizationState, payload: Record<string, Record<string, string>>): LocalizationState => ({
    ...state,
    [StoreKeys.DICTIONARY]: payload
});
const addLabels = (state: LocalizationState, payload: Record<string, string>): LocalizationState => ({
    ...state,
    [StoreKeys.LABELS]: payload
});
const addLocales = (state: LocalizationState, payload: Array<string>): LocalizationState => ({
    ...state,
    [StoreKeys.LOCALES]: payload
});
const changeLang = (state: LocalizationState, payload: string): LocalizationState => ({
    ...state,
    [StoreKeys.ACTIVE_LOCALE]: payload
});
const startLoading = (state: LocalizationState, payload: boolean): LocalizationState => ({
    ...state,
    [StoreKeys.IS_LOADING]: payload,
    [StoreKeys.LOADING_COUNT]: state[StoreKeys.LOADING_COUNT] + 1
});
const stopLoading = (state: LocalizationState, payload: boolean): LocalizationState => ({
    ...state,
    [StoreKeys.IS_LOADING]: payload,
    [StoreKeys.LOADING_COUNT]: state[StoreKeys.LOADING_COUNT] - 1
});
const initStore = (state: LocalizationState, payload: LocalizationState): LocalizationState => ({
    ...state,
    ...payload
});

export const localizationReducer = (state: Record<string, any> & LocalizationState = initialState, { payload, type}: AnyAction) => {
    switch (type) {
        case LOCALIZATION_ACTIONS.CHANGE_LOCALE:
            return changeLang(state, payload);
        case LOCALIZATION_ACTIONS.ADD_DICTIONARY:
            return addDictionary(state, payload);
        case LOCALIZATION_ACTIONS.START_LOADING:
            return startLoading(state, payload);
        case LOCALIZATION_ACTIONS.STOP_LOADING:
            return stopLoading(state, payload);
        case LOCALIZATION_ACTIONS.ADD_LOCALES:
            return addLocales(state, payload);
        case LOCALIZATION_ACTIONS.ADD_LABELS:
            return addLabels(state, payload);
        case LOCALIZATION_ACTIONS.INIT_STORE:
            return initStore(state, payload);
        default:
            return state;
    }
};
