import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createRootReducer } from './reducers';
import { TranslateProvider, translateMiddleware } from '../services/translate';
import { request } from '../services';
import { App } from './index';

const history = createBrowserHistory();
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(
            routerMiddleware(history),
            translateMiddleware,
            thunk
)));

export class AppContainer extends Component {
    fetchDictionary = () => request('/api/translate');

    render() {
        return (
            <Provider store={store}>
                <TranslateProvider fetchDictionary={this.fetchDictionary}>
                    <ConnectedRouter history={history}>
                        <App />
                    </ConnectedRouter>
                </TranslateProvider>
            </Provider>
        );
    }
}
