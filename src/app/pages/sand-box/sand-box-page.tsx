import React from 'react';
import { Route, Switch } from 'react-router';
import { ComponentsCollection } from '../constants';

export class SandBoxPage extends React.Component {
    render() {
        return (
            <Switch>
                {ComponentsCollection.map(
                    ({ component, exact, url }, index) =>
                        <Route path={url} key={index} exact={exact} component={component} />
                )}
            </Switch>
        );
    }
}
