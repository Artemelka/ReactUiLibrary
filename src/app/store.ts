import { applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { appReducer } from './reducers';
import { history } from './app-history';
import { createdStoreWithInsertAndDeleteReducer, translateMiddleware } from '../services';

const middleWares: Array<Middleware> = [
    routerMiddleware(history),
    translateMiddleware,
    thunk,
    logger
];

const store = createdStoreWithInsertAndDeleteReducer(appReducer, composeWithDevTools(applyMiddleware(...middleWares)));

export const appStore = store;
export const insertReducer = store.insertReducer;
export const insertWithRemoveReducer = store.insertWithRemoveReducer;

