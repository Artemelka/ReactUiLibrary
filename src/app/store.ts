import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { appReducer } from './reducers';
import { history } from './app-history';
import { translateMiddleware } from '../services/translate';

const middleWares = [
    routerMiddleware(history),
    translateMiddleware,
    thunk,
    logger
];

export const appStore = createStore(
    appReducer(history),
    composeWithDevTools(applyMiddleware(...middleWares))
);
