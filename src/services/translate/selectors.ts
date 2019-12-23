import { DictionaryStore, TranslateState, Dictionary, StoreKeys } from './types';
import { TRANSLATE_REDUCER } from './constants';

export const translateStoreSelector = (store: DictionaryStore): TranslateState => store[TRANSLATE_REDUCER];
export const translateDictionarySelector = (store: DictionaryStore): Dictionary => store[TRANSLATE_REDUCER][StoreKeys.DICTIONARY];
export const translateLocaleSelector = (store: DictionaryStore): string => store[TRANSLATE_REDUCER][StoreKeys.LOCALE];
export const translateLoaderSelector = (store: DictionaryStore): boolean => store[TRANSLATE_REDUCER][StoreKeys.IS_LOADING];
