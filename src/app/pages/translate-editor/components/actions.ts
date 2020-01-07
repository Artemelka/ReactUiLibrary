import { Dispatch } from 'redux';
import {
    addLocalizationDictionary,
    changeLocalizationLoading,
    ErrorMessages
} from '../../../../services/localization';
import { API } from '../../../api';

export const getAllDictionaryActionCreator = () => (dispatch: Dispatch): void => {
    dispatch(changeLocalizationLoading(true));

    API.localization.getAllDictionary().then(dictionary => {
        dispatch(addLocalizationDictionary(dictionary));
        dispatch(changeLocalizationLoading(false));
    }).catch(error => {
        console.error(ErrorMessages.REQUEST_ERROR, error);
        dispatch(changeLocalizationLoading(false));
    });
};
