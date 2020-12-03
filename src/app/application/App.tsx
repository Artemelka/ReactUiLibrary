import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import classNames from 'classnames/bind';
import {
    initLocalizationActionSaga,
    injectReducersAndSagas,
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

interface AppContainerComponentProps {
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
            <div className={cn('App')}>
                {pages.map(pageProps => <Route {...pageProps} key={pageProps.path} />)}
            </div>
        );
    }
}

export const AppContainer = injectReducersAndSagas({ asyncSagas })(
    connect(null, {
        initLocalization: initLocalizationActionSaga
    })(AppContainerComponent)
);
