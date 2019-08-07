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
import { App } from './app';
import './index.css';

const ELEMENT_ID = 'App';
const ROOT = document.getElementById(ELEMENT_ID);
const history = createBrowserHistory();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
    thunk
)));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    ROOT
);
