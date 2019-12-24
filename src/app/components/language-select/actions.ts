import { Dispatch } from 'redux';
import {
    addLocalizationLabels,
    changeLocalizationActiveLocale,
    changeLocalizationLoading,
    ErrorMessages
} from '../../../services/localization';
import { API } from '../../api';

export const changeLocaleActionCreator = (activeLocale: string) => (dispatch: Dispatch): void => {
    dispatch(changeLocalizationLoading(true));

    API.localization.getLabels(activeLocale)
        .then((response: Record<string, string>) => {
            dispatch(changeLocalizationActiveLocale(activeLocale));
            dispatch(addLocalizationLabels(response));
            dispatch(changeLocalizationLoading(false));
        })
        .catch(error => {
            console.error(ErrorMessages.REQUEST_ERROR, error);
            dispatch(changeLocalizationLoading(false));
        });
};
