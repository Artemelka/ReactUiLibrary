import { takeEvery } from 'redux-saga/effects';
import { INIT_LOCALIZATION_ACTION_SAGA } from '../../actions';
import { initLocalizationWorkerSaga } from './init-localization-worker-saga';

export const INIT_LOCALIZATION_WATCHER_SAGA_NAME = 'INIT_LOCALIZATION_WATCHER_SAGA';
export function* initLocalizationWatcherSaga() {
    yield takeEvery(INIT_LOCALIZATION_ACTION_SAGA, initLocalizationWorkerSaga);
}
