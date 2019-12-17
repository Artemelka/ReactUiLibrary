import { createSelector } from 'reselect';
import { DictionaryStore, TranslateState, Dictionary, StoreKeys } from './types';
import { TRANSLATE_REDUCER } from './constants';

export const getTranslateStore = (store: DictionaryStore): TranslateState => store[TRANSLATE_REDUCER];

export const translateStoreSelector = createSelector(
    getTranslateStore,
    (store: TranslateState): TranslateState => store
);
export const translateDictionarySelector = createSelector(
    getTranslateStore,
    (store: TranslateState): Dictionary => store[StoreKeys.DICTIONARY]
);
export const translateLocaleSelector = createSelector(
    getTranslateStore,
    (store: TranslateState): string => store[StoreKeys.LOCALE]
);
export const translateLoaderSelector = createSelector(
    getTranslateStore,
    (store: TranslateState): boolean => store[StoreKeys.IS_LOADING]
);

