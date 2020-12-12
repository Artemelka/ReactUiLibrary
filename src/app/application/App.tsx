import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import classNames from 'classnames/bind';
import { StoreInjectorConsumer } from 'services';
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

type AppContainerComponentProps = {
    initLocalization?: () => void;
};

export class AppContainerComponent extends Component<AppContainerComponentProps> {
    static defaultProps: AppContainerComponentProps = {
        initLocalization: () => false
    };

    componentDidMount(): void {
        setTimeout(() => {
            this.props.initLocalization();
        }, 0);
    }

    render() {
        return (
            <StoreInjectorConsumer asyncSagas={asyncSagas}>
                <div className={cn('App')}>
                    {pages.map(pageProps => <Route {...pageProps} key={pageProps.path} />)}
                </div>
            </StoreInjectorConsumer>
        );
    }
}

export const AppContainer = connect(null, {
    initLocalization: initLocalizationActionSaga
})(AppContainerComponent);
