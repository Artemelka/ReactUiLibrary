import { put, call } from 'redux-saga/effects';
import { requestWrapper, requestGetParams } from '../../../utils';

const USER_PARAMS = 'name=tim';

export function* getRequestWorkerSaga() {
    try {
        const data = yield call(requestWrapper, requestGetParams, USER_PARAMS);

        console.log('=== persons ===', data);
    } catch (error) {
        console.error('getRequestWorkerSaga error', error.message);
    }
}
