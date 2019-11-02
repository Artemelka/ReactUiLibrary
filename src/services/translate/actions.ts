import { Dispatch } from 'redux';
import { ErrorMessages, TranslateActions } from './constants';
import { Dictionary } from './types';

const { ADD_DICTIONARY, CHANGE_LANG, CHANGE_LOADING_STATE } = TranslateActions;

export const addDictionary = (dictionary: Dictionary) => ({
    type: ADD_DICTIONARY,
    payload: dictionary
});
export const changeLocale = (locale: string) => ({
    type: CHANGE_LANG,
    payload: locale
});
export const changeTranslateLoadingState = (isLoading: boolean) => ({
    type: CHANGE_LOADING_STATE,
    payload: isLoading
});

export const initializeDictionary = (fetch: () => Promise<any>) =>
    (dispatch: Dispatch) => {
        dispatch(changeTranslateLoadingState(true));
        fetch()
            .then((dictionary: Dictionary) => {
                dispatch(addDictionary(dictionary));
                dispatch(changeTranslateLoadingState(false));
            }).catch((error) => {
                console.error(ErrorMessages.REQUEST_ERROR, error);
                dispatch(changeTranslateLoadingState(false));
            });
    };

