import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { translateReducer } from '../services/translate';

export const reducers = combineReducers({
    routing: routerReducer,
    translateDictionary: translateReducer
});
