import { takeEvery } from 'redux-saga/effects';
import { FETCH_GET_REQUEST_ACTION_SAGA } from '../../actions';
import { getRequestWorkerSaga } from './get-request-worker-saga';

export const GET_REQUEST_WATCHER_SAGA_NAME = 'GET_REQUEST_WATCHER_SAGA';
export function* getRequestWatcherSaga() {
    yield takeEvery(FETCH_GET_REQUEST_ACTION_SAGA, getRequestWorkerSaga);
}
