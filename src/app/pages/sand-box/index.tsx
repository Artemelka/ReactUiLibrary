import React from 'react';
import { Route, Switch } from 'react-router';
import { TextSandBox } from './text/text-sand-box';

const MenuExample = () => {
    return (
        <div>MENU</div>
    );
};

export const ComponentsCollection = [
    {
        component: MenuExample,
        exact: true,
        name: MenuExample.name,
        url: '/library'
    },
    {
        component: TextSandBox,
        exact: true,
        name: TextSandBox.name,
        url: '/library/text'
    }
];

const renderRoute = (
    path: string,
    component: React.ComponentClass<any> | React.FunctionComponent<any>,
    key: number,
    exact?: boolean
) => <Route path={path} key={key} exact={exact} component={component} />;

export class SandBox extends React.Component {
    render() {
        return (
            <Switch>
                {ComponentsCollection.map(
                    ({ component, exact, url }, index) => renderRoute(url, component, index, exact))
                }
            </Switch>
        );
    }
}