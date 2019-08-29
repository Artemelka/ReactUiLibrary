import { ActionType, Dictionary, TranslateState } from './types';
import {
    INITIAL_STATE, TranslateActions, TRANSLATE_STORE_DICTIONARY_KEY, TRANSLATE_STORE_LOCALE_KEY
} from './constants';

const addDictionary = (state: TranslateState, payload: Dictionary) => ({
    ...state,
    [TRANSLATE_STORE_DICTIONARY_KEY]: payload
});

const changeLang = (state: TranslateState, payload: string) => ({
    ...state,
    [TRANSLATE_STORE_LOCALE_KEY]: payload
});

const changeStore = (state: TranslateState, {dictionary, locale}: TranslateState) => ({
    ...state,
    [TRANSLATE_STORE_DICTIONARY_KEY]: dictionary,
    [TRANSLATE_STORE_LOCALE_KEY]: locale
});

export const translateReducer = (state = INITIAL_STATE, {type, payload}: ActionType) => {
    switch (type) {
        case TranslateActions.CHANGE_LANG:
            return changeLang(state, payload);
        case TranslateActions.ADD_DICTIONARY:
            return addDictionary(state, payload);
        case TranslateActions.CHANGE_STORE:
            return changeStore(state, payload);
        default: return state;
    }
};
