import { fork, take } from 'redux-saga/effects';
import { CHANGE_LOCALE_ACTION_SAGA } from '../../actions';
import { getLabelsWorkerSaga } from './get-labels-worker-saga';

export const GET_LABELS_WATCHER_SAGA_NAME = 'GET_LABELS_WATCHER_SAGA';
export function* getLabelsWatcherSaga() {
    while (true) {
        const { payload } = yield take(CHANGE_LOCALE_ACTION_SAGA);
        yield fork(getLabelsWorkerSaga, payload);
    }
}
