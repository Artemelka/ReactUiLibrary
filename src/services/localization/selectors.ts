import { LOCALIZATION_REDUCER_KEY, StoreKeys } from './constants';
import { LocalizationState } from './types';

type Store = Record<string, any> & { [LOCALIZATION_REDUCER_KEY]: LocalizationState };

export const localizationActiveLocaleSelector = (state: Store): string =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.ACTIVE_LOCALE];

export const localizationDictionarySelector = (state: Store): Record<string, Record<string, string>> =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.DICTIONARY];

export const localizationIsLoadingSelector = (state: Store): boolean =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.IS_LOADING] || state[LOCALIZATION_REDUCER_KEY][StoreKeys.LOADING_COUNT] !== 0;

export const localizationLoadingCountSelector = (state: Store): number =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.LOADING_COUNT];

export const localizationLabelsSelector = (state: Store): Record<string, string> =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.LABELS];

export const localizationLocalesSelector = (state: Store): Array<string> =>
    state[LOCALIZATION_REDUCER_KEY][StoreKeys.LOCALES];

export const localizationStateSelector = (state: Store): LocalizationState =>
    state[LOCALIZATION_REDUCER_KEY];
