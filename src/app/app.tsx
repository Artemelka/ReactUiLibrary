import * as React from 'react';
import { Route, Switch } from 'react-router';
import { TestHomePage } from './pages';

import './app.less';

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className='App'>
                <Route path="/" component={TestHomePage} />
            </div>
        );
    }
}

