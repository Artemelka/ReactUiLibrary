import { Middleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createAppStore } from '@wildberries/redux-core-modules';
import { ROOT_REDUCERS } from './reducer';
import logger from 'redux-logger'; // tslint:disable-line:no-implicit-dependencies
import { history } from './app-history';

const middlewares: Array<Middleware> = [
    routerMiddleware(history)
];

if (process.env && process.env.MODE === 'development') {
    // middlewares.push(logger);
}

export const appStore = createAppStore({ extraMiddlewares: middlewares, rootReducers: ROOT_REDUCERS });
