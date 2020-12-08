import { takeEvery } from 'redux-saga/effects';
import { GET_ALL_DICTIONARY_ACTION_SAGA } from '../../actions';
import { getAllDictionaryWorkerSaga } from './get-all-dictionary-worker-saga';

export const GET_ALL_DICTIONARY_WATCHER_SAGA_NAME = 'GET_ALL_DICTIONARY_WATCHER_SAGA_NAME';
export function* getAllDictionaryWatcherSaga() {
    yield takeEvery(GET_ALL_DICTIONARY_ACTION_SAGA, getAllDictionaryWorkerSaga);
};
