import { nameSpaceCreator } from '../index';
import { StoreKeys } from './types';

export const NavigatorLanguage = {
    EN: 'en-EN',
    RU: 'ru-RU'
};
export const DEFAULT_DICTIONARY = {
    [NavigatorLanguage.EN]: {},
    [NavigatorLanguage.RU]: {}
};

export const TRANSLATE_REDUCER = 'translate';

export const INITIAL_STATE = {
    [StoreKeys.DICTIONARY]: DEFAULT_DICTIONARY,
    [StoreKeys.LOCALE]: navigator ? navigator.language : NavigatorLanguage.EN,
    [StoreKeys.IS_LOADING]: false
};

const setNameSpace = nameSpaceCreator('@@translate');
export const TranslateActions = setNameSpace([
    'ADD_DICTIONARY',
    'CHANGE_LANG',
    'CHANGE_STORE',
    'CHANGE_LOADING'
]);

export const ErrorMessages = {
    REQUEST_ERROR: 'services/translate: translation dictionary not loaded, used default dictionary.',
    MIDDLEWARE_ERROR: 'services/translate: You must integrate translateMiddleware with redux-store using'
};


