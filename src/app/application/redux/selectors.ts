import { Location } from 'history';
import { RouterState } from 'connected-react-router';
import { AppState } from '../../types';
import { APP_STORE_KEY } from '../../constants';
import { createSelector } from 'reselect';

const routerSelector = (state: AppState): RouterState => state[APP_STORE_KEY.ROUTER];

export const routerLocationSelector = createSelector(
    routerSelector,
    (router): Location => router.location
);
export const locationPathNameSelector = createSelector(
    routerLocationSelector,
    (location): string => location.pathname
);
