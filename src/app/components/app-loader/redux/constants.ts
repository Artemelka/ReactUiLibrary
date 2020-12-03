import { nameSpaceCreator } from 'services';
import { StoreKeys } from './types';

export const APP_LOADER_REDUCER_KEY = 'appLoader';
export const initialState = {
    [StoreKeys.IS_LOADING]: true
};

export const APP_LOADER_ACTIONS = nameSpaceCreator(`@@${APP_LOADER_REDUCER_KEY}`)([
    'SET_LOADING_START',
    'SET_LOADING_STOP'
]);
