import { nameSpaceCreator } from '../index';
import { StoreKeys } from './types';
import dictionary from '../../server/routes/translate/dictionary.json';

export const LOCALIZATION_REDUCER_KEY = 'localization';

export const NavigatorLanguage = {
    EN: 'en-EN',
    RU: 'ru-RU'
};

export const DEFAULT_DICTIONARY = {
    [NavigatorLanguage.EN]: { test: 'test' },
    [NavigatorLanguage.RU]: { test: 'тест' }
};

export const initialState = {
    [StoreKeys.ACTIVE_LOCALE]: NavigatorLanguage.RU,
    [StoreKeys.DICTIONARY]: {},
    [StoreKeys.IS_LOADING]: false,
    [StoreKeys.LABELS]: DEFAULT_DICTIONARY[NavigatorLanguage.RU],
    [StoreKeys.LOCALES]: [NavigatorLanguage.RU, NavigatorLanguage.EN],
};

export const LOCALIZATION_ACTIONS = nameSpaceCreator(`@@${LOCALIZATION_REDUCER_KEY}`)([
    'ADD_DICTIONARY',
    'ADD_LABELS',
    'ADD_LOCALES',
    'CHANGE_LOCALE',
    'CHANGE_LOADING',
    'INIT_STORE'
]);

export const ErrorMessages = {
    REQUEST_ERROR: `services/${LOCALIZATION_REDUCER_KEY}: translation dictionary not loaded, used default dictionary.`,
    MIDDLEWARE_ERROR: `services/${LOCALIZATION_REDUCER_KEY}: You must integrate translateMiddleware with redux-store using`
};

