import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { translateReducer, TRANSLATE_STORE_KEY } from '../services/translate';

export const reducers = combineReducers({
    routing: routerReducer,
    [TRANSLATE_STORE_KEY]: translateReducer
});
