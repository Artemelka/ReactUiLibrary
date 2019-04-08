import { Dispatch } from 'redux';
import { TranslateActions } from './reducer';

export const addDictionary = (dictionary: {[key: string]: string}) => (dispatch: Dispatch) =>
    dispatch({type: TranslateActions.ADD_DICTIONARY, payload: dictionary});

export const changeLocale = (locale: string) => (dispatch: Dispatch) =>
    dispatch({type: TranslateActions.CHANGE_LANG, payload: locale});

