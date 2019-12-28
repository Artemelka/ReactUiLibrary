import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { appStore } from './store';
import { history } from './app-history';
import { AppContainer } from './app';
import { AppLoader } from './components';

export const App = () => (
    <Provider store={appStore}>
            <ConnectedRouter history={history}>
                <AppContainer />
                <AppLoader />
            </ConnectedRouter>
    </Provider>
);

