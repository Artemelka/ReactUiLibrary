import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import classNames from 'classnames/bind';
// import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { StoreLoader } from './inject-redusers-and-sagas';
import {
    initLocalizationActionSaga,
    INIT_LOCALIZATION_WATCHER_SAGA_NAME,
    initLocalizationWatcherSaga
} from './redux';
import { pages } from '../pages';
import style from './App.less';

const cn = classNames.bind(style);
const asyncSagas = [{
    name: INIT_LOCALIZATION_WATCHER_SAGA_NAME,
    saga: initLocalizationWatcherSaga
}];
const storeInjectConfig = { sagasToInject: asyncSagas };

type AppContainerComponentProps = {
    initLocalization?: () => void;
}

export class AppContainerComponent extends Component<AppContainerComponentProps> {
    static defaultProps: AppContainerComponentProps = {
        initLocalization: () => false
    };

    componentDidMount(): void {
        this.props.initLocalization();
    }

    render() {
        return (
            <StoreLoader storeInjectConfig={storeInjectConfig}>
                <div className={cn('App')}>
                    {pages.map(pageProps => <Route {...pageProps} key={pageProps.path} />)}
                </div>
            </StoreLoader>
        );
    }
}

export const AppContainer = connect(null, {
    initLocalization: initLocalizationActionSaga
})(AppContainerComponent);
