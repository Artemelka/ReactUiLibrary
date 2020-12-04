import { StoreKeys } from './constants';

export type LocalizationLabelsType = Record<string, string>;
export type LocalizationDictionaryType = Record<string, LocalizationLabelsType>;

export type LocalizationState = {
    [StoreKeys.ACTIVE_LOCALE]: string,
    [StoreKeys.DICTIONARY]: LocalizationDictionaryType,
    [StoreKeys.IS_LOADING]: boolean,
    [StoreKeys.LABELS]: LocalizationLabelsType,
    [StoreKeys.LOADING_COUNT]: number,
    [StoreKeys.LOCALES]: Array<string>,
};

export type LocalizationAction<T> = { type: string, payload: T };
