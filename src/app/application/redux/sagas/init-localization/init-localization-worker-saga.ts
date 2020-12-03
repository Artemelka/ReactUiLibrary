import { put, call, select } from 'redux-saga/effects';
import {
    ErrorMessages,
    initLocalizationState,
    localizationIsLoadingSelector,
    localizationLoadingCountSelector,
    StoreKeys
} from 'services';
import { setAppLoaderStart, setAppLoaderStop } from 'components';
import { API } from '../../../../api';

export function* initLocalizationWorkerSaga() {
    yield put(setAppLoaderStart());
    const userLanguage = window.navigator.language;
    const isLoading = yield select(localizationIsLoadingSelector);
    const loadingCount = yield select(localizationLoadingCountSelector);

    try {
        const locales: Array<string> = yield call(API.localization.getLocales);

        const activeLocale = locales.includes(userLanguage) ? userLanguage : locales[0];

        const response = yield call(API.localization.getLabels, activeLocale);

        yield put(initLocalizationState({
            [StoreKeys.DICTIONARY]: { [activeLocale]: response },
            [StoreKeys.LABELS]: response,
            [StoreKeys.LOCALES]: locales,
            [StoreKeys.ACTIVE_LOCALE]: activeLocale,
            [StoreKeys.IS_LOADING]: isLoading,
            [StoreKeys.LOADING_COUNT]: loadingCount
        }));
        yield put(setAppLoaderStop());
    } catch (error) {
        console.error(ErrorMessages.REQUEST_ERROR, error);
        yield put(setAppLoaderStop());
    }
}
