export enum StoreKeys {
    IS_LOADING = 'isLoading'
}

export type AppLoaderState = {
    [StoreKeys.IS_LOADING]: boolean;
};

export type AppLoaderAction<T> = { type: string, payload: T };

export interface AppLoaderProps {
    enabled?: boolean;
}

export type AppState = Record<string, any> & AppLoaderState;
