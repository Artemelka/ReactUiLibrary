import { Dispatch } from 'redux';
import { TranslateActions } from './reducer';

const { ADD_DICTIONARY, CHANGE_LANG } = TranslateActions;

export const addDictionary = (dictionary: {[key: string]: string}) => (dispatch: Dispatch) =>
    dispatch({type: ADD_DICTIONARY, payload: dictionary});

export const changeLocale = (locale: string) => (dispatch: Dispatch) =>
    dispatch({type: CHANGE_LANG, payload: locale});

