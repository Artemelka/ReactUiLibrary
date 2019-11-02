import { ActionType, Dictionary, TranslateState } from './types';
import {
    INITIAL_STATE,
    TranslateActions,
    TRANSLATE_STORE_DICTIONARY_KEY,
    TRANSLATE_STORE_LOCALE_KEY,
    TRANSLATE_STORE_LOADING_KEY
} from './constants';

const addDictionary = (state: TranslateState, payload: Dictionary) => ({
    ...state,
    [TRANSLATE_STORE_DICTIONARY_KEY]: payload
});

const changeLang = (state: TranslateState, payload: string) => ({
    ...state,
    [TRANSLATE_STORE_LOCALE_KEY]: payload
});

const changeLoadingState = (state: TranslateState, payload: boolean) => ({
    ...state,
    [TRANSLATE_STORE_LOADING_KEY]: payload
});

export const translateReducer = (state = INITIAL_STATE, {type, payload}: ActionType) => {
    switch (type) {
        case TranslateActions.CHANGE_LANG:
            return changeLang(state, payload);
        case TranslateActions.ADD_DICTIONARY:
            return addDictionary(state, payload);
        case TranslateActions.CHANGE_LOADING_STATE:
            return changeLoadingState(state, payload);
        default:
            return state;
    }
};
