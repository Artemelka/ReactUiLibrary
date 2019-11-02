export const NavigatorLanguage = {
    EN: 'en-EN',
    RU: 'ru-RU'
};
export const DEFAULT_DICTIONARY = {
    [NavigatorLanguage.EN]: {},
    [NavigatorLanguage.RU]: {}
};

export const TRANSLATE_STORE_KEY = 'translate';
export const TRANSLATE_STORE_DICTIONARY_KEY = 'dictionary';
export const TRANSLATE_STORE_LOCALE_KEY = 'locale';
export const TRANSLATE_STORE_LOADING_KEY = 'isLoading';

export const INITIAL_STATE = {
    [TRANSLATE_STORE_DICTIONARY_KEY]: DEFAULT_DICTIONARY,
    [TRANSLATE_STORE_LOCALE_KEY]: navigator ? navigator.language : NavigatorLanguage.EN,
    [TRANSLATE_STORE_LOADING_KEY]: false
};

export const TranslateActions = {
    ADD_DICTIONARY: 'ADD_DICTIONARY',
    CHANGE_LANG: 'CHANGE_LANG',
    CHANGE_STORE: 'CHANGE_STORE',
    CHANGE_LOADING_STATE: 'CHANGE_LOADING_STATE'
};

export const ErrorMessages = {
    REQUEST_ERROR: 'services/translate: translation dictionary not loaded, used default dictionary.',
    MIDDLEWARE_ERROR: 'services/translate: You must integrate translateMiddleware with redux-store using'
};


