import React, { Component, Suspense } from 'react';
import classNames from 'classnames/bind';
import { Route, withRouter, RouteComponentProps } from 'react-router';
import { pages } from './pages';
import { modals } from './modals';

const style = require('./app.less');
const cn = classNames.bind(style);

export class AppComponent extends Component<RouteComponentProps> {
    render() {
        const { match: { url }, location: { pathname } } = this.props;
        const modalsUrl = pathname.slice((url.length + 1)).split('/');

        return (
            <div className={cn('App')}>
                {/*<Suspense fallback={<div>Загрузка...</div>}>*/}
                {
                    pages.map((pageProps, index) =>
                        <Route {...pageProps} key={`${index}_${pageProps.path}`} />)
                }
                {/*</Suspense>*/}
                {Boolean(modalsUrl[0]) && modalsUrl.map(
                    (modal, index) => {
                        const Component = modals[modal];

                        return Component && <Component key={index}/>;
                    }
                )}
            </div>
        );
    }
}

export const App = withRouter(AppComponent);
