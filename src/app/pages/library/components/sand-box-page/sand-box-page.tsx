import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ComponentsPages } from '../../component-pages';
import { getUniqId } from '../../../../../services/utils/uniq-id';

const keyId = getUniqId();

export class SandBoxPage extends Component {
    render() {
        return (
            <Switch>
                {ComponentsPages.map(
                    (component, index) => Array.isArray(component)
                        ? (component.map((item, secondIndex) => (
                            <Route
                                path={item.url}
                                key={`${index}${keyId}${secondIndex}`}
                                exact={item.exact}
                                component={item.component}
                            />
                        )))
                        : (
                            <Route
                                path={component.url}
                                key={`${index}${keyId}`}
                                exact={component.exact}
                                sensitive
                                component={component.component}
                            />
                        )
                )}
            </Switch>
        );
    }
}
