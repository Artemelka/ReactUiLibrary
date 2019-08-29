import { Dispatch } from 'redux';
import { ErrorMessages, TranslateActions } from './constants';
import { Dictionary, TranslateState } from './types';

const { ADD_DICTIONARY, CHANGE_LANG, CHANGE_STORE } = TranslateActions;

const changeTranslateStore = (nextStore: TranslateState) => ({
    type: CHANGE_STORE,
    payload: nextStore
});
export const addDictionary = (dictionary: Dictionary) => ({
    type: ADD_DICTIONARY,
    payload: dictionary
});
export const changeLocale = (locale: string) => ({
    type: CHANGE_LANG,
    payload: locale
});

export const initializeDictionary = (fetch: () => Promise<any>, locale: string) =>
    (dispatch: Dispatch) => {
        fetch().then((dictionary: Dictionary) => {
            const userLocale = navigator ? navigator.language : '';

            if (userLocale !== locale) {
                dispatch(changeTranslateStore({locale: userLocale, dictionary}));
            } else {
                dispatch(addDictionary(dictionary));
            }
        }).catch((error) => {
            console.error(ErrorMessages.REQUEST_ERROR, error);
        });
    };

