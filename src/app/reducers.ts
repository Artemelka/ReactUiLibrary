import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { translateReducer } from './elements';

export const reducers = combineReducers({
    routing: routerReducer,
    translateDictionary: translateReducer
});
