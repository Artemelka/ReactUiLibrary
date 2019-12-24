import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { STORE_KEY } from './constants';
import { LOCALIZATION_REDUCER_KEY, localizationReducer } from '../services/localization';

export const appReducer = (history: History) => combineReducers({
    [STORE_KEY.ROUTER]: connectRouter(history),
    [LOCALIZATION_REDUCER_KEY]: localizationReducer
});

