import { ReactElement } from 'react';
import { Dispatch, Store } from 'redux';

export type Fetch = () => Promise<any>;
export type Dictionary = Record<string, Record<string, string>>;

export enum StoreKeys {
    DICTIONARY = 'dictionary',
    LOCALE = 'locale',
    IS_LOADING = 'isLoading'
}

export type TranslateState = {
    [StoreKeys.DICTIONARY]: Dictionary,
    [StoreKeys.LOCALE]: string,
    [StoreKeys.IS_LOADING]: boolean
};

export interface DictionaryProviderProps {
    children: ReactElement;
    fetchDictionary: Fetch;
    initializeDictionary: (fetch: Fetch) => (dispatch: Dispatch) => void;
    locale?: string;
    storeDictionary: Dictionary;
}

export type DictionaryStore = Store & { translate: TranslateState };

export interface TranslateProps { translateKey: string; }




