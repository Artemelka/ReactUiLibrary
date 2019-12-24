import React from 'react';
import classNames from 'classnames/bind';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router';
import { pages } from './pages';
import { appStore } from './store';
import { history } from './app-history';
import style from './app.less';

const cn = classNames.bind(style);

export const App = () => (
    <Provider store={appStore}>
            <ConnectedRouter history={history}>
                <div className={cn('App')}>
                    {pages.map(pageProps => <Route {...pageProps} key={pageProps.path} />)}
                </div>
            </ConnectedRouter>
    </Provider>
);

