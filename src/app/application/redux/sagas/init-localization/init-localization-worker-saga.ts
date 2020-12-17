import { put, call, select } from 'redux-saga/effects';
import {
    ErrorMessages,
    initLocalizationState,
    localizationIsLoadingSelector,
    localizationLoadingCountSelector
} from '@artemelka/react-localization';
import { setAppLoaderStart, setAppLoaderStop } from 'components';
import { API } from '../../../../api';

export function* initLocalizationWorkerSaga() {
    yield put(setAppLoaderStart());
    const userLanguage = window.navigator.language;

    try {
        const locales: Array<string> = yield call(API.localization.getLocales);

        const activeLocale = locales.includes(userLanguage) ? userLanguage : locales[0];

        const response = yield call(API.localization.getLabels, activeLocale);

        const isLoading = yield select(localizationIsLoadingSelector);
        const loadingCount = yield select(localizationLoadingCountSelector);

        yield put(initLocalizationState({
            activeLocale,
            dictionary: { [activeLocale]: response },
            isLoading,
            labels: response,
            loadingCount,
            locales
        }));
    } catch (error) {
        console.error(ErrorMessages.REQUEST_ERROR, error);
    } finally {
        yield put(setAppLoaderStop());
    }
}
