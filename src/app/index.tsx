import React from 'react';
import classNames from 'classnames/bind';
import { Route } from 'react-router';
import { TestHomePage, LibraryPage } from './pages';

const style = require('./app.less');
const cn = classNames.bind(style);

export class App extends React.Component {
    render() {
        return (
            <div className={cn('App')}>
                <Route path="/" exact component={TestHomePage} />
                <Route path="/library" component={LibraryPage} />
            </div>
        );
    }
}
