import { createSlice, Draft } from '@reduxjs/toolkit';
import { AppLoaderState, AppLoaderCase } from './types';

export const APP_LOADER_REDUCER_KEY = 'appLoader';
export const initialState = {
    isLoading: false
};

const appLoaderSlice = createSlice<AppLoaderState, AppLoaderCase>({
    name: APP_LOADER_REDUCER_KEY,
    initialState,
    reducers: {
        setAppLoaderStart: (state: Draft<AppLoaderState>) => {
            state.isLoading = true;
        },
        setAppLoaderStop: (state: Draft<AppLoaderState>) => {
            state.isLoading = false;
        }
    }
});

export const { setAppLoaderStart, setAppLoaderStop } = appLoaderSlice.actions;
export const appLoaderReducer = appLoaderSlice.reducer;
