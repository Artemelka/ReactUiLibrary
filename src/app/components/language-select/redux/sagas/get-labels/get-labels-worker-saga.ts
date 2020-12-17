import { call, put } from 'redux-saga/effects';
import {
    addLocalizationLabels,
    changeLocalizationActiveLocale,
    ErrorMessages
} from '@artemelka/react-localization';
import { setAppLoaderStop, setAppLoaderStart } from 'components';
import { API } from '../../../../../api';

export function* getLabelsWorkerSaga(activeLocale: string) {
    yield put(setAppLoaderStart());

    try {
        const labels: Record<string, string> = yield call(API.localization.getLabels, activeLocale);

        yield put(changeLocalizationActiveLocale(activeLocale));
        yield put(addLocalizationLabels(labels));
    } catch (error) {
        console.error(ErrorMessages.REQUEST_ERROR, error);
    } finally {
        yield put(setAppLoaderStop());
    }
}
