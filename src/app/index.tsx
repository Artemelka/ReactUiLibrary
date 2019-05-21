import React, { Component, ComponentClass } from 'react';
import classNames from 'classnames/bind';
import { Route } from 'react-router';
import { TestHomePage, LayoutPage, LibraryPage } from './pages';

const style = require('./app.less');
const cn = classNames.bind(style);

interface RouteProps {
    component: ComponentClass;
    exact?: boolean;
    path: string;
}
const pages: Array<RouteProps> = [
    {
        component: TestHomePage,
        exact: true,
        path: '/'
    }, {
        component: LibraryPage,
        path: '/library'
    }, {
        component: LayoutPage,
        path: '/layout'
    }
];

export class App extends Component {
    render() {
        return (
            <div className={cn('App')}>
                {pages.map((pageProps, index) =>
                    <Route {...pageProps} key={`${index}_${pageProps.path}`} />
                )}
            </div>
        );
    }
}
