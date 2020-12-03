import { AnyAction } from 'redux';

export const CHANGE_LOCALE_ACTION_SAGA = 'CHANGE_LOCALE_ACTION_SAGA';
export const changeLocaleActionSaga = (activeLocale: string): AnyAction  => ({
    type: CHANGE_LOCALE_ACTION_SAGA,
    payload: activeLocale
});
