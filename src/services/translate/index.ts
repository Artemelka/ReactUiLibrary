import { translateMiddleware, getTranslateState } from './store';

export { translateReducer } from './reducer';
export { addDictionary, changeLocale } from './actions';
export { translateMiddleware } from './store';
export { TranslateProvider } from './provider';

export const translate = (key: string) => {
    const { dictionary, locale } = getTranslateState();

    return dictionary[locale][key] || key;
};
