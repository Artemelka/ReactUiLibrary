import { call, put } from 'redux-saga/effects';
import {
    addLocalizationDictionary,
    startLocalizationLoading,
    stopLocalizationLoading,
    ErrorMessages
} from '@artemelka/react-localization';
import { API } from '../../../../../../../api';

export function* getAllDictionaryWorkerSaga() {
    yield put(startLocalizationLoading(true));

    try {
        const dictionary = yield call(API.localization.getAllDictionary);

        yield put(addLocalizationDictionary(dictionary));
    } catch (error) {
        console.error(ErrorMessages.REQUEST_ERROR, error);
    } finally {
        yield put(stopLocalizationLoading(false));
    }
}
