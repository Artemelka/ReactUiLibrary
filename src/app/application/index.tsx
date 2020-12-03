import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { AppLoader } from 'components';
import { appStore, history } from './redux';
import { AppContainer } from './App';
import { mockAllRequest } from '../api';

export const App = () => {
    if (process.env && process.env.MOCK) {
        mockAllRequest();
    }

    return (
        <Provider store={appStore}>
            <ConnectedRouter history={history}>
                <AppContainer />
                <AppLoader />
            </ConnectedRouter>
        </Provider>
    );
};
