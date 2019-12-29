import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import classNames from 'classnames/bind';
import { initLocalization } from './init-actions';
import { pages } from './pages';
import style from './app.less';

const cn = classNames.bind(style);

interface AppContainerComponentProps {
    initLocalization?: () => void;
}

class AppContainerComponent extends Component<AppContainerComponentProps> {
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

export const AppContainer = connect(null, {
    initLocalization
})(AppContainerComponent);
