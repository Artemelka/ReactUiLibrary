import React from 'react';
import { Route } from 'react-router';
import { TestHomePage, LibraryPage } from './pages';

import './app.less';

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="App">
                <Route path="/" exact component={TestHomePage} />
                <Route path="/library" component={LibraryPage} />
            </div>
        );
    }
}

