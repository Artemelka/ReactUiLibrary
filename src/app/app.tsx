import React from 'react';
import { Route } from 'react-router';
import { TestHomePage, LibraryPage } from './pages';

import './app.less';

export class App extends React.Component<{}, {}> {
    getDuplicate = () => {
        console.log('result');
    };

    handleClick = () => {
        this.getDuplicate();

        console.log('result');
    };

    render() {
        return (
            <div className="App">
                {/*<Route path="/" exact component={TestHomePage} />*/}
                <Route path="/" exact component={LibraryPage} />
                {/*<Route path="/library" component={LibraryPage} />*/}
                <button style={{zIndex: 100, position: 'relative'}} onClick={this.handleClick}>duplicate</button>
            </div>
        );
    }
}

