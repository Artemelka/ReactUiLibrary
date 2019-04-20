import React from 'react';
import * as ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { reducers } from './app/reducers';
import { translateMiddleware, TranslateProvider } from './services/translate';
import { App } from './app';
import './index.css';

const ELEMENT_ID = 'App';
const ROOT = document.getElementById(ELEMENT_ID);
const history = createHistory();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    thunk,
    translateMiddleware
)));

ReactDOM.render(
    <Provider store={store}>
        <TranslateProvider>
            <Router history={history}>
                <App />
            </Router>
        </TranslateProvider>
    </Provider>,
    ROOT
);
