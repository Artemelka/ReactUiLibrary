export enum StoreKeys {
    ACTIVE_LOCALE = 'activeLocale',
    DICTIONARY = 'dictionary',
    IS_LOADING = 'isLoading',
    LABELS = 'labels',
    LOADING_COUNT = 'loadingCount',
    LOCALES = 'locales'
}

export type LocalizationState = {
    [StoreKeys.ACTIVE_LOCALE]: string,
    [StoreKeys.DICTIONARY]: Record<string, Record<string, string>>,
    [StoreKeys.IS_LOADING]: boolean,
    [StoreKeys.LABELS]: Record<string, string>,
    [StoreKeys.LOADING_COUNT]: number,
    [StoreKeys.LOCALES]: Array<string>,
};

export type LocalizationAction<T> = { type: string, payload: T };
