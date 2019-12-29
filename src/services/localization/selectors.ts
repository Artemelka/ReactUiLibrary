import { LOCALIZATION_REDUCER_KEY } from './constants';
import { LocalizationState, StoreKeys } from './types';

export const localizationActiveLocaleSelector = (state: Record<string, any> & LocalizationState): string =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.ACTIVE_LOCALE];

export const localizationDictionarySelector = (state: Record<string, any> & LocalizationState): Record<string, Record<string, string>> =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.DICTIONARY];

export const localizationIsLoadingSelector = (state: Record<string, any> & LocalizationState): boolean =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.IS_LOADING];

export const localizationLabelsSelector = (state: Record<string, any> & LocalizationState): Record<string, string> =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.LABELS];

export const localizationLocalesSelector = (state: Record<string, any> & LocalizationState): Array<string> =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.LOCALES];

export const localizationStateSelector = (state: Record<string, any> & LocalizationState): LocalizationState =>
    state[LOCALIZATION_REDUCER_KEY];
