import { Dispatch } from 'redux';
import {
    ErrorMessages,
    initLocalizationState,
    localizationIsLoadingSelector,
    localizationLoadingCountSelector,
    StoreKeys
} from 'services';
import { changeAppLoaderState } from 'components';
import { API } from '../api';
import { AppState } from '../types'

export const initLocalization = () => (dispatch: Dispatch, getState: () => AppState): void => {
    dispatch(changeAppLoaderState(true));

    const userLanguage = window.navigator.language;

    API.localization.getLocales().then((locales: Array<string>) => {
        const activeLocale = locales.includes(userLanguage) ? userLanguage : locales[0];

        API.localization.getLabels(activeLocale).then((response: Record<string, string>) => {
            dispatch(initLocalizationState({
                [StoreKeys.DICTIONARY]: { [activeLocale]: response },
                [StoreKeys.LABELS]: response,
                [StoreKeys.LOCALES]: locales,
                [StoreKeys.ACTIVE_LOCALE]: activeLocale,
                [StoreKeys.IS_LOADING]: localizationIsLoadingSelector(getState()),
                [StoreKeys.LOADING_COUNT]: localizationLoadingCountSelector(getState())
            }));
            dispatch(changeAppLoaderState(false));
        }).catch(error => {
            console.error(ErrorMessages.REQUEST_ERROR, error);
            dispatch(changeAppLoaderState(false));
        });
    }).catch(error => {
        console.error(ErrorMessages.REQUEST_ERROR, error);
        dispatch(changeAppLoaderState(false));
    });
};
