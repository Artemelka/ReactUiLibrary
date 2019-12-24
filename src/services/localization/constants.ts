import { nameSpaceCreator } from '../index';
import { StoreKeys } from './types';
import dictionary from '../../server/routes/translate/dictionary.json';

export const LOCALIZATION_REDUCER_KEY = 'localization';

export const NavigatorLanguage = {
    EN: 'en-EN',
    RU: 'ru-RU'
};

export const DEFAULT_DICTIONARY = {
    // @ts-ignore
    [NavigatorLanguage.EN]: dictionary[NavigatorLanguage.EN],
    // @ts-ignore
    [NavigatorLanguage.RU]: dictionary[NavigatorLanguage.RU]
};

export const initialState = {
    [StoreKeys.DICTIONARY]: DEFAULT_DICTIONARY,
    [StoreKeys.IS_LOADING]: false,
    [StoreKeys.LABELS]: DEFAULT_DICTIONARY[NavigatorLanguage.RU],
    [StoreKeys.LOCALES]: [NavigatorLanguage.RU, NavigatorLanguage.EN],
    [StoreKeys.ACTIVE_LOCALE]: NavigatorLanguage.RU
};

export const LOCALIZATION_ACTIONS = nameSpaceCreator(`@@${LOCALIZATION_REDUCER_KEY}`)([
    'ADD_DICTIONARY',
    'ADD_LABELS',
    'ADD_LOCALES',
    'CHANGE_LOCALE',
    'CHANGE_LOADING'
]);

export const ErrorMessages = {
    REQUEST_ERROR: `services/${LOCALIZATION_REDUCER_KEY}: translation dictionary not loaded, used default dictionary.`,
    MIDDLEWARE_ERROR: `services/${LOCALIZATION_REDUCER_KEY}: You must integrate translateMiddleware with redux-store using`
};

