import { createSelector } from 'reselect';
import { LOCALIZATION_REDUCER_KEY, StoreKeys } from './constants';
import { LocalizationState, LocalizationLabelsType, LocalizationDictionaryType } from './types';

type Store = Record<string, any> & { [LOCALIZATION_REDUCER_KEY]: LocalizationState };

export const localizationStateSelector = (state: Store): LocalizationState =>
    state[LOCALIZATION_REDUCER_KEY];

export const localizationActiveLocaleSelector = createSelector(
    localizationStateSelector,
    (localizationState): string => localizationState[StoreKeys.ACTIVE_LOCALE]
);

export const localizationDictionarySelector = createSelector(
    localizationStateSelector,
    (localizationState): LocalizationDictionaryType => localizationState[StoreKeys.DICTIONARY]
);

export const localizationLabelsSelector = createSelector(
    localizationStateSelector,
    (localizationState): LocalizationLabelsType => localizationState[StoreKeys.LABELS]
);

export const localizationLocalesSelector = createSelector(
    localizationStateSelector,
    (localizationState): Array<string> => localizationState[StoreKeys.LOCALES]
);

export const localizationLoadingCountSelector = createSelector(
    localizationStateSelector,
    (localizationState): number => localizationState[StoreKeys.LOADING_COUNT]
);

export const isLoadingStateSelector = createSelector(
    localizationStateSelector,
    (localizationState): boolean => localizationState[StoreKeys.IS_LOADING]
);

export const localizationIsLoadingSelector = createSelector(
    isLoadingStateSelector,
    localizationLoadingCountSelector,
    (isLoading, loadingCount): boolean => isLoading || loadingCount !== 0
);
