import { RouterState } from 'connected-react-router';
import { LOCALIZATION_REDUCER_KEY, LocalizationState } from '@artemelka/react-localization';
import { APP_LOADER_REDUCER_KEY } from 'components';
import { APP_STORE_KEY } from './constants';
import { AppLoaderState } from 'components';

export type AppState = {
    [APP_STORE_KEY.ROUTER]: RouterState,
    [LOCALIZATION_REDUCER_KEY]: LocalizationState,
    [APP_LOADER_REDUCER_KEY]: AppLoaderState
};
