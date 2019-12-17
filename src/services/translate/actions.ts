import { Dispatch, AnyAction } from 'redux';
import { ErrorMessages, TranslateActions } from './constants';
import { Dictionary } from './types';

const { ADD_DICTIONARY, CHANGE_LANG, CHANGE_LOADING_STATE } = TranslateActions;

export const addDictionary = (dictionary: Dictionary): AnyAction => ({
    type: ADD_DICTIONARY,
    payload: dictionary
});
export const changeLocale = (locale: string): AnyAction => ({
    type: CHANGE_LANG,
    payload: locale
});
export const changeTranslateLoadingState = (isLoading: boolean): AnyAction => ({
    type: CHANGE_LOADING_STATE,
    payload: isLoading
});

export const initializeDictionary = (fetch: () => Promise<any>) =>
    (dispatch: Dispatch): void => {
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

