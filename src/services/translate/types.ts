import { ReactElement } from 'react';
import { Dispatch } from 'redux';

export type DictionaryData = { [key: string]: string };
export type Action = () => Promise<any>;

export type Dictionary = {
    [key: string]: DictionaryData;
};

export interface ActionType {
    type: string;
    payload?: any;
}

export interface TranslateState {
    dictionary: Dictionary;
    locale: string;
}

export interface DictionaryProviderProps {
    children: ReactElement;
    fetchDictionary: Action;
    initializeDictionary: (fetch: Action, locale: string) => (dispatch: Dispatch) => void;
    locale?: string;
    storeDictionary: Dictionary;
}

export type DictionaryStore = { translate: TranslateState };

export interface TranslateProps { translateKey: string; }


