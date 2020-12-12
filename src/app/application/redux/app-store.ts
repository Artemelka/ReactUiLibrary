import { configureStore, Middleware } from '@reduxjs/toolkit';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; // tslint:disable-line:no-implicit-dependencies
import { createInjectorEnhancer, AppStore } from 'services';
import { createReducer } from './reducer';
import { history } from './app-history';

const sagaMiddleware = createSagaMiddleware();
const runSaga = sagaMiddleware.run;

const middlewares: Array<Middleware> = [
    routerMiddleware(history),
    sagaMiddleware
];

if (process.env && process.env.MODE === 'development') {
    middlewares.push(logger);
}

const enhancers = [createInjectorEnhancer({ createReducer, runSaga })];

// @ts-ignore
export const appStore: AppStore = configureStore({
    reducer: createReducer(),
    enhancers,
    middleware: middlewares
});
