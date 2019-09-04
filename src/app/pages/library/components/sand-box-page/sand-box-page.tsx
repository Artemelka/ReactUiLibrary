import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ComponentsPages } from '../../component-pages';
import { getUniqId } from '../../../../../services/utils/uniq-id';

export class SandBoxPage extends Component {
    render() {
        return (
            <Switch>
                {ComponentsPages.map(
                    (component) => Array.isArray(component)
                        ? (component.map(item => (
                            <Route
                                path={item.url}
                                key={getUniqId()}
                                exact={item.exact}
                                component={item.component}
                            />
                        )))
                        : (
                            <Route
                                path={component.url}
                                key={getUniqId()}
                                exact={component.exact}
                                component={component.component}
                            />
                        )
                )}
            </Switch>
        );
    }
}
