import { Action } from 'redux';

export const GET_ALL_DICTIONARY_ACTION_SAGA = 'GET_ALL_DICTIONARY_ACTION_SAGA';
export const getAllDictionaryActionSaga = (): Action<string> => ({
    type: GET_ALL_DICTIONARY_ACTION_SAGA
});
