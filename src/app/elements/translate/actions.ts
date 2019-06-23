import { Dispatch } from 'redux';
import { TranslateActions } from './reducer';

const { CHANGE_LANG } = TranslateActions;

export const changeLocale = (locale: string) => (dispatch: Dispatch) =>
    dispatch({type: CHANGE_LANG, payload: locale});

