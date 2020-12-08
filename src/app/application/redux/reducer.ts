import { combineReducers, Reducer } from 'redux';
import { connectRouter } from 'connected-react-router';
import { LOCALIZATION_REDUCER_KEY, localizationReducer } from 'services';
import { appLoaderReducer, APP_LOADER_REDUCER_KEY } from 'components';
import { history } from './app-history';
import { APP_STORE_KEY } from '../../constants';
import { AppReducer } from '../../types';

export const ROOT_REDUCERS = {
    [APP_STORE_KEY.ROUTER]: connectRouter(history),
    [LOCALIZATION_REDUCER_KEY]: localizationReducer,
    [APP_LOADER_REDUCER_KEY]: appLoaderReducer
};

export const appReducer = (asyncReducers?: Record<string, Reducer>): AppReducer => combineReducers({
    ...ROOT_REDUCERS,
    ...(asyncReducers ? asyncReducers : {})
});
