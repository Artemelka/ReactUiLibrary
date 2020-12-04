import { Middleware, Reducer } from 'redux';
import { Saga } from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { injectAsyncSaga, injectAsyncReducer, createAppStore, removeAsyncSaga, removeAsyncReducer } from '@wildberries/redux-core-modules';
import { ROOT_REDUCERS } from './reducer';
import logger from 'redux-logger'; // tslint:disable-line:no-implicit-dependencies
import { history } from './app-history';

const middlewares: Array<Middleware> = [
    routerMiddleware(history)
];

if (process.env && process.env.MODE === 'development') {
    middlewares.push(logger);
}

export const appStore = createAppStore({ extraMiddlewares: middlewares, rootReducers: ROOT_REDUCERS });

export type InjectReducerParamsType = {
    name: string;
    reducer: Reducer;
};
export type InjectSagaParamsType = {
    name: string;
    saga: Saga;
};

export const injectReducer = ({ name, reducer }: InjectReducerParamsType) =>
    injectAsyncReducer({ store: appStore, name, reducer });

export const injectSaga = ({ name, saga }: InjectSagaParamsType) => injectAsyncSaga({ store: appStore, name, saga });

export const removeReducer = ({ name }: InjectReducerParamsType) => removeAsyncReducer({ store: appStore, name });

export const removeSaga = ({ name }: InjectSagaParamsType) => removeAsyncSaga({ store: appStore, name });


