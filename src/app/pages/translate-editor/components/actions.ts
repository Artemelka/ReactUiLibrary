import { Dispatch } from 'redux';
import {
    addLocalizationDictionary,
    startLocalizationLoading,
    stopLocalizationLoading,
    ErrorMessages
} from '../../../../services/localization';
import { API } from '../../../api';

export const getAllDictionaryActionCreator = () => (dispatch: Dispatch): void => {
    dispatch(startLocalizationLoading());

    API.localization.getAllDictionary().then(dictionary => {
        dispatch(addLocalizationDictionary(dictionary));
        dispatch(stopLocalizationLoading());
    }).catch(error => {
        console.error(ErrorMessages.REQUEST_ERROR, error);
        dispatch(stopLocalizationLoading());
    });
};
