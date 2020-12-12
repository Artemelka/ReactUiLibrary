import { Draft } from '@reduxjs/toolkit';

export type AppLoaderState = {
    isLoading: boolean;
};

export type AppLoaderProps = {
    enabled?: boolean;
};

export type AppLoaderCase = {
    setAppLoaderStart: (state: Draft<AppLoaderState>) => void;
    setAppLoaderStop: (state: Draft<AppLoaderState>) => void;
};
