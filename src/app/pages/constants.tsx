import React from 'react';
import { AnchorSandBox } from './sand-box/anchor/anchor-sand-box';
import { ButtonSandBox } from './sand-box/button/button-sand-box';
import { IconSandBox } from './sand-box/icon/icon-sand-box';
import { TextSandBox } from './sand-box/text/text-sand-box';

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
        component: IconSandBox,
        exact: true,
        name: IconSandBox.name,
        url: '/library/icon'
    }, {
        component: TextSandBox,
        exact: true,
        name: TextSandBox.name,
        url: '/library/text'
    }
];
