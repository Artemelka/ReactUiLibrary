import { applyMiddleware, createStore, Middleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { appReducer } from './reducers';
import { history } from './app-history';
import { createStoreWithInsertReducer } from '../services';

const middleWares: Array<Middleware> = [
    routerMiddleware(history),
    thunk,
    logger
];

const asyncStore = createStoreWithInsertReducer(
    createStore,
    appReducer,
    composeWithDevTools(applyMiddleware(...middleWares)),
    true
);

export const appStore = asyncStore.store;
export const insertReducer = asyncStore.insertReducer;

