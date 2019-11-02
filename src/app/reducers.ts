import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { STORE_KEY } from './constants';
import { translateReducer, TRANSLATE_STORE_KEY } from '../services/translate';

export const appReducer = (history: History) => combineReducers({
    [STORE_KEY.ROUTER]: connectRouter(history),
    [TRANSLATE_STORE_KEY]: translateReducer
});

