import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { translateReducer, TRANSLATE_STORE_KEY } from '../services/translate';
import { history } from './app-history';

export const appReducer = combineReducers({
    router: connectRouter(history),
    [TRANSLATE_STORE_KEY]: translateReducer
});

