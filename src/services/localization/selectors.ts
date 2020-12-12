import { createSelector } from 'reselect';
import { LOCALIZATION_REDUCER_KEY, StoreKeys, initialState } from './constants';
import { LocalizationState } from './types';

type Store = Record<string, any> & { [LOCALIZATION_REDUCER_KEY]: LocalizationState };

const localizationStoreSelector = (store: Store): LocalizationState => store[LOCALIZATION_REDUCER_KEY] || initialState;

export const localizationActiveLocaleSelector = createSelector(
    localizationStoreSelector,
    (store) => store[StoreKeys.ACTIVE_LOCALE]
);

export const localizationDictionarySelector = createSelector(
    localizationStoreSelector,
    store => store[StoreKeys.DICTIONARY]
);

export const localizationLoadingCountSelector = createSelector(
    localizationStoreSelector,
    store => store[StoreKeys.LOADING_COUNT]
);

const isLoadingSelector = createSelector(
    localizationStoreSelector,
    store => store[StoreKeys.IS_LOADING]
);

export const localizationIsLoadingSelector = createSelector(
    isLoadingSelector,
    localizationLoadingCountSelector,
    (isLoading, counter) => isLoading || counter !== 0
);

export const localizationLabelsSelector = createSelector(
    localizationStoreSelector,
    store => store[StoreKeys.LABELS]
);

export const localizationLocalesSelector = createSelector(
    localizationStoreSelector,
    store => store[StoreKeys.LOCALES]
);
