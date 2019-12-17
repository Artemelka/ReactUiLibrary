import { AnyAction } from 'redux';
import { Dictionary, StoreKeys, TranslateState } from './types';
import { INITIAL_STATE, TranslateActions } from './constants';

const addDictionary = (state: TranslateState, payload: Dictionary): TranslateState => ({
    ...state,
    [StoreKeys.DICTIONARY]: payload
});

const changeLang = (state: TranslateState, payload: string): TranslateState => ({
    ...state,
    [StoreKeys.LOCALE]: payload
});

const changeLoadingState = (state: TranslateState, payload: boolean): TranslateState => ({
    ...state,
    [StoreKeys.IS_LOADING]: payload
});

export const translateReducer = (state: TranslateState = INITIAL_STATE, {type, payload}: AnyAction) => {
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
