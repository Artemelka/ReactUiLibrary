import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { translateReducer, TRANSLATE_STORE_KEY } from '../services/translate';

export const createRootReducer = (history: History) => combineReducers({
    router: connectRouter(history),
    [TRANSLATE_STORE_KEY]: translateReducer
});
