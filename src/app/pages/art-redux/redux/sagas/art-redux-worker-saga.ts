import { put, select, call } from 'redux-saga/effects';
import { valueSelector } from '../selectors';
import { setAsyncStoreBAction } from '../actions';

const fakeRequest = (value: string) => new Promise((res) => {
    setTimeout(() => {
        res({ value });
    }, 500);
});

export function* artReduxWorkerSaga() {
    const inputValue = yield select(valueSelector);

    try {
        const { value } = yield call(fakeRequest, inputValue);

        yield put(setAsyncStoreBAction(value));
    } catch (error) {
        console.error('Error in artReduxWorkerSaga', error);
    }
}
