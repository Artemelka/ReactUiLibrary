import React from 'react';
import classNames from 'classnames/bind';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { pages } from './pages';
import { TranslateProvider } from '../services/translate';
import { appStore } from './store';
import { history } from './app-history';
import { request } from '../services';

const style = require('./app.less');
const cn = classNames.bind(style);
const fetchDictionary = () => request('/api/translate');

export const App = () => (
    <Provider store={appStore}>
        <TranslateProvider fetchDictionary={fetchDictionary}>
            <ConnectedRouter history={history}>
                <div className={cn('App')}>
                    {pages.map(pageProps => <Route {...pageProps} key={pageProps.path} />)}
                </div>
            </ConnectedRouter>
        </TranslateProvider>
    </Provider>
);

