import { Dispatch } from 'redux';
import {
    addLocalizationLabels,
    changeLocalizationActiveLocale,
    ErrorMessages
} from '../../../services/localization';
import { changeAppLoaderState } from '../app-loader';
import { API } from '../../api';

export const changeLocaleActionCreator = (activeLocale: string) => (dispatch: Dispatch): void => {
    dispatch(changeAppLoaderState(true));

    API.localization.getLabels(activeLocale)
        .then((response: Record<string, string>) => {
            dispatch(changeLocalizationActiveLocale(activeLocale));
            dispatch(addLocalizationLabels(response));
            dispatch(changeAppLoaderState(false));
        })
        .catch(error => {
            console.error(ErrorMessages.REQUEST_ERROR, error);
            dispatch(changeAppLoaderState(false));
        });
};
