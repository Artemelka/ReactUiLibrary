import { AnyAction, CombinedState, Reducer } from 'redux';
import { RouterState } from 'connected-react-router';
import { LOCALIZATION_REDUCER_KEY } from 'services';
import { APP_LOADER_REDUCER_KEY } from 'components';
import { APP_STORE_KEY } from './constants';
import { LocalizationState } from '../services/localization/types';
import { AppLoaderState } from 'components';

export type AppState = {
    [APP_STORE_KEY.ROUTER]: RouterState,
    [LOCALIZATION_REDUCER_KEY]: LocalizationState,
    [APP_LOADER_REDUCER_KEY]: AppLoaderState
};
export type AppReducer = Reducer<CombinedState<AppState>, AnyAction>;
