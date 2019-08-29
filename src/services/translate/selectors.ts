import { createSelector } from 'reselect'
import { DictionaryStore } from './types';
import { TRANSLATE_STORE_KEY, TRANSLATE_STORE_DICTIONARY_KEY, TRANSLATE_STORE_LOCALE_KEY } from './constants';

export const getTranslateStore = (store: DictionaryStore) => store[TRANSLATE_STORE_KEY];

export const getDictionary = (store: DictionaryStore) =>
    store[TRANSLATE_STORE_KEY][TRANSLATE_STORE_DICTIONARY_KEY];

export const getLocale = (store: DictionaryStore) =>
    store[TRANSLATE_STORE_KEY][TRANSLATE_STORE_LOCALE_KEY];

export const translateStoreSelector = createSelector(getTranslateStore, store => store);
export const translateDictionarySelector = createSelector(getDictionary, dictionary => dictionary);
export const translateLocaleSelector = createSelector(getLocale, locale => locale);
