import { combineReducers } from 'redux';
import { History } from 'history';
import { translateReducer, TRANSLATE_STORE_KEY } from '../services/translate';
import { connectRouter } from 'connected-react-router';

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    [TRANSLATE_STORE_KEY]: translateReducer
});
