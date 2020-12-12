import { createSlice } from '@reduxjs/toolkit';
import { initialState, StoreKeys, LOCALIZATION_REDUCER_KEY } from './constants';
import { LocalizationState } from './types';

export const localizationSlice = createSlice({
    name: LOCALIZATION_REDUCER_KEY,
    initialState,
    reducers: {
        changeLocalizationActiveLocale: (state: LocalizationState, { payload }: { payload: string}) => {
            state[StoreKeys.ACTIVE_LOCALE] = payload;
        },
        addLocalizationDictionary: (
            state: LocalizationState,
            { payload }: { payload: Record<string, Record<string, string>> }
        ) => {
            state[StoreKeys.DICTIONARY] = payload;
        },
        startLocalizationLoading: (state: LocalizationState, { payload }: { payload: boolean }) => {
            state[StoreKeys.IS_LOADING] = payload;
            state[StoreKeys.LOADING_COUNT] += 1;
        },
        stopLocalizationLoading: (state: LocalizationState, { payload }: { payload: boolean }) => {
            state[StoreKeys.IS_LOADING] = payload;
            state[StoreKeys.LOADING_COUNT] -= 1;
        },
        addLocalizationLocales: (state: LocalizationState, { payload }: { payload: Array<string> }) => {
            state[StoreKeys.LOCALES] = payload;
        },
        addLocalizationLabels: (state: LocalizationState, { payload }: { payload: Record<string, string> }) => {
            state[StoreKeys.LABELS] = payload;
        },
        initLocalizationState: (state: LocalizationState, { payload }: { payload: LocalizationState }) => {
            state = payload;
        }
    }
});

export const {
    changeLocalizationActiveLocale,
    addLocalizationDictionary,
    startLocalizationLoading,
    stopLocalizationLoading,
    addLocalizationLocales,
    addLocalizationLabels,
    initLocalizationState
} = localizationSlice.actions;
export const localizationReducer = localizationSlice.reducer;
