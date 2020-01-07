import { LOCALIZATION_ACTIONS } from './constants';
import { LocalizationAction, LocalizationState } from './types';

const {
    ADD_DICTIONARY,
    ADD_LABELS,
    ADD_LOCALES,
    CHANGE_LOCALE,
    START_LOADING,
    STOP_LOADING,
    INIT_STORE
} = LOCALIZATION_ACTIONS;

export const addLocalizationDictionary = (dictionary: Record<string, Record<string, string>>): LocalizationAction<Record<string, Record<string, string>>> => ({
    type: ADD_DICTIONARY,
    payload: dictionary
});

export const addLocalizationLabels = (labels: Record<string, string>): LocalizationAction<Record<string, string>> => ({
    type: ADD_LABELS,
    payload: labels
});

export const addLocalizationLocales = (locales: Array<string>): LocalizationAction<Array<string>> => ({
    type: ADD_LOCALES,
    payload: locales
});

export const changeLocalizationActiveLocale = (locale: string): LocalizationAction<string> => ({
    type: CHANGE_LOCALE,
    payload: locale
});

export const startLocalizationLoading = (): LocalizationAction<boolean> => ({
    type: START_LOADING,
    payload: true
});

export const stopLocalizationLoading = (): LocalizationAction<boolean> => ({
    type: STOP_LOADING,
    payload: false
});

export const initLocalizationState = (nextState: LocalizationState): LocalizationAction<LocalizationState> => ({
    type: INIT_STORE,
    payload: nextState
});
