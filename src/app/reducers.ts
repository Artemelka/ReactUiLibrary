import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from './app-history';
import { STORE_KEY } from './constants';
import { translateReducer, TRANSLATE_STORE_KEY } from '../services/translate';

export const appReducer = (asyncReducers?: Record<string, Reducer>): Reducer => combineReducers({
    [STORE_KEY.ROUTER]: connectRouter(history),
    [TRANSLATE_STORE_KEY]: translateReducer,
    ...(asyncReducers ? asyncReducers : {})
});
