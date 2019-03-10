import * as React from 'react';
import { Route, Switch } from 'react-router';
import { TestHomePage, LibraryPage } from './pages';

import './app.less';

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <div className="App">
                {/*<Route path="/" exact component={TestHomePage} />*/}
                <Route path="/" exact component={LibraryPage} />
                {/*<Route path="/library" component={LibraryPage} />*/}
            </div>
        );
    }
}

