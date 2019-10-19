import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Route, Switch } from 'react-router';
import { pages, PageNotFound } from './pages';

const style = require('./app.less');
const cn = classNames.bind(style);

export class App extends Component {
    render() {
        return (
            <div className={cn('App')}>
                <Switch>
                    {
                        pages.map((pageProps, index) =>
                            <Route {...pageProps} key={`${index}_${pageProps.path}`} />)
                    }
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        );
    }
}
