import React from 'react';
import {
    AnchorSandBox,
    ButtonSandBox,
    ButtonGroupSandBox,
    CheckboxSandBox,
    IconSandBox,
    InputSandBox,
    TextSandBox,
} from './sand-box';

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
    }, {
        component: AnchorSandBox,
        exact: true,
        name: AnchorSandBox.name,
        url: '/library/anchor'
    }, {
        component: ButtonSandBox,
        exact: true,
        name: ButtonSandBox.name,
        url: '/library/button'
    }, {
        component: ButtonGroupSandBox,
        exact: true,
        name: ButtonGroupSandBox.name,
        url: '/library/button-group'
    }, {
        component: CheckboxSandBox,
        exact: true,
        name: CheckboxSandBox.name,
        url: '/library/checkbox'
    }, {
        component: IconSandBox,
        exact: true,
        name: IconSandBox.name,
        url: '/library/icon'
    }, {
        component: InputSandBox,
        exact: true,
        name: InputSandBox.name,
        url: '/library/input'
    }, {
        component: TextSandBox,
        exact: true,
        name: TextSandBox.name,
        url: '/library/text'
    }
];
