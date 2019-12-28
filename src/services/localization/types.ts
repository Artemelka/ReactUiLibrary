export enum StoreKeys {
    ACTIVE_LOCALE = 'activeLocale',
    LOCALES = 'locales',
    DICTIONARY = 'dictionary',
    IS_LOADING = 'isLoading',
    LABELS = 'labels'
}

export type LocalizationState = {
    [StoreKeys.ACTIVE_LOCALE]: string,
    [StoreKeys.DICTIONARY]: Record<string, Record<string, string>>,
    [StoreKeys.IS_LOADING]: boolean,
    [StoreKeys.LABELS]: Record<string, string>
    [StoreKeys.LOCALES]: Array<string>,
};

export type LocalizationAction<T> = { type: string, payload: T };
