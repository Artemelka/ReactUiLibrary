import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ComponentsPages } from '../../component-pages';

export class SandBoxPage extends Component {
    render() {
        return (
            <Switch>
                {ComponentsPages.map(
                    ({ component, exact, url }, index) =>
                        <Route path={url} key={index + url} exact={exact} component={component} />
                )}
            </Switch>
        );
    }
}
