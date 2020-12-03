import { Action } from 'redux';

export const FETCH_GET_REQUEST_ACTION_SAGA = 'FETCH_GET_REQUEST_ACTION_SAGA';
export const fetchGetRequestActionSaga = (): Action<string> => ({
    type: FETCH_GET_REQUEST_ACTION_SAGA
});
