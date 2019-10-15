import { createSelector } from 'reselect';

const STORE_ROUTER_KEY = 'router';
const ROUTER_LOCATION_KEY = 'location';

const getLocation = (store: {[key: string]: any}) => store[STORE_ROUTER_KEY][ROUTER_LOCATION_KEY];

export const routerLocationSelector = createSelector(getLocation, store => store);
