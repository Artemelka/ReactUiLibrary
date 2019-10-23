import { createSelector } from 'reselect';
import { DictionaryStore } from './types';
import {
    TRANSLATE_STORE_KEY,
    TRANSLATE_STORE_DICTIONARY_KEY,
    TRANSLATE_STORE_LOCALE_KEY,
    TRANSLATE_STORE_LOADING_KEY
} from './constants';

export const getDictionary = (store: DictionaryStore) =>
    store[TRANSLATE_STORE_KEY][TRANSLATE_STORE_DICTIONARY_KEY];

export const getLocale = (store: DictionaryStore) =>
    store[TRANSLATE_STORE_KEY][TRANSLATE_STORE_LOCALE_KEY];

export const getLoaderState = (store: DictionaryStore) => store[TRANSLATE_STORE_KEY][TRANSLATE_STORE_LOADING_KEY];

export const translateDictionarySelector = createSelector(getDictionary, dictionary => dictionary);
export const translateLocaleSelector = createSelector(getLocale, locale => locale);
export const translateLoaderSelector = createSelector(getLoaderState, isLoading => isLoading);
export const translateStoreSelector = createSelector(
    getDictionary,
    getLocale,
    getLoaderState,
    (dictionary, locale, isLoading) => ({
        [TRANSLATE_STORE_DICTIONARY_KEY]: dictionary,
        [TRANSLATE_STORE_LOCALE_KEY]: locale,
        [TRANSLATE_STORE_LOADING_KEY]: isLoading
    })
);

