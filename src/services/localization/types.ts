import { StoreKeys } from './constants';

export type LocalizationState = {
    [StoreKeys.ACTIVE_LOCALE]: string,
    [StoreKeys.DICTIONARY]: Record<string, Record<string, string>>,
    [StoreKeys.IS_LOADING]: boolean,
    [StoreKeys.LABELS]: Record<string, string>,
    [StoreKeys.LOADING_COUNT]: number,
    [StoreKeys.LOCALES]: Array<string>,
};
