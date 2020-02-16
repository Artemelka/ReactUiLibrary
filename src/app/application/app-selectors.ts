import { Location } from 'history';
import { AppState } from '../types';
import { APP_STORE_KEY } from '../constants';

export const routerLocationSelector = (state: AppState): Location => state[APP_STORE_KEY.ROUTER].location;
export const locationPathNameSelector = (state: AppState): string => state[APP_STORE_KEY.ROUTER].location.pathname;
