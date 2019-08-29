import React from 'react';
import * as ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { reducers } from './app/reducers';
import { TranslateProvider, translateMiddleware } from './services/translate';
import { request } from './services';
import { App } from './app';
import './index.css';

const ELEMENT_ID = 'App';
const fetchDictionary = () => request('/api/translate');
const ROOT = document.getElementById(ELEMENT_ID);
const history = createBrowserHistory();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    translateMiddleware,
    thunk
)));

ReactDOM.render(
    <Provider store={store}>
        <TranslateProvider fetchDictionary={fetchDictionary}>
            <Router history={history}>
                <App />
            </Router>
        </TranslateProvider>
    </Provider>,
    ROOT
);
