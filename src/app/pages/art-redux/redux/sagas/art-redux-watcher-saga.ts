import { takeEvery } from 'redux-saga/effects';
import { TEST_ACTION_SAGA } from '../actions';
import { artReduxWorkerSaga } from './art-redux-worker-saga';

export const ART_REDUX_WATCHER_SAGA_NAME = 'ART_REDUX_WATCHER_SAGA';
export function* artReduxWatcherSaga() {
    yield takeEvery(TEST_ACTION_SAGA, artReduxWorkerSaga);
}
