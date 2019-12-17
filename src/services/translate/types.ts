import { ReactElement } from 'react';
import { Dispatch, Store } from 'redux';
import { StringData } from '../../types';

export type Action = () => Promise<any>;

export type Dictionary = {
    [key: string]: StringData;
};

export type TranslateState = {
    dictionary: Dictionary,
    locale: string,
    isLoading: boolean
};

export interface DictionaryProviderProps {
    children: ReactElement;
    fetchDictionary: Action;
    initializeDictionary: (fetch: Action) => (dispatch: Dispatch) => void;
    locale?: string;
    storeDictionary: Dictionary;
}

export type DictionaryStore = Store & { translate: TranslateState };

export interface TranslateProps { translateKey: string; }

export enum StoreKeys {
    DICTIONARY = 'dictionary',
    LOCALE = 'locale',
    IS_LOADING = 'isLoading'
}


