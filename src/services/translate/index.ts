import { getTranslateState } from './store';

export { TranslateProvider } from './provider';
export { translateMiddleware } from './store';
export { translateReducer } from './reducer';
export { TRANSLATE_STORE_KEY, NavigatorLanguage } from './constants';
export { changeLocale } from './actions';
export { TranslateComponent } from './component';
export { translateDictionarySelector, translateLocaleSelector, translateStoreSelector } from './selectors';
export { DictionaryStore } from './types';

export const translate = (key: string) => {
    const { dictionary, locale } = getTranslateState();

    return dictionary[locale][key] || key;
};
