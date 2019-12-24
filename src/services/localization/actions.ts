import { LOCALIZATION_ACTIONS } from './constants';
import { LocalizationAction } from './types';

const { ADD_DICTIONARY, ADD_LABELS, ADD_LOCALES, CHANGE_LOCALE, CHANGE_LOADING } = LOCALIZATION_ACTIONS;

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

export const changeLocalizationLoading = (isLoading: boolean): LocalizationAction<boolean> => ({
    type: CHANGE_LOADING,
    payload: isLoading
});
