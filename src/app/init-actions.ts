import { Dispatch } from 'redux';
import {
    changeLocalizationLoading,
    ErrorMessages,
    initLocalizationState,
    StoreKeys
} from '../services/localization';
import { API } from './api';

export const initLocalization = () => (dispatch: Dispatch) => {
    dispatch(changeLocalizationLoading(true));

    const userLanguage = window.navigator.language;

    API.localization.getLocales().then((locales: Array<string>) => {
        const activeLocale = locales.includes(userLanguage) ? userLanguage : locales[0];

        API.localization.getLabels(activeLocale).then((response: Record<string, string>) => {
            dispatch(initLocalizationState({
                [StoreKeys.DICTIONARY]: { [activeLocale]: response },
                [StoreKeys.LABELS]: response,
                [StoreKeys.LOCALES]: locales,
                [StoreKeys.ACTIVE_LOCALE]: activeLocale,
                [StoreKeys.IS_LOADING]: false
            }));
        }).catch(error => {
            console.error(ErrorMessages.REQUEST_ERROR, error);
            dispatch(changeLocalizationLoading(false));
        });
    }).catch(error => {
        console.error(ErrorMessages.REQUEST_ERROR, error);
        dispatch(changeLocalizationLoading(false));
    });
};
