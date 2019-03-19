import React from 'react';
import { TextSandBox } from './sand-box/text/text-sand-box';
import { AnchorSandBox } from './sand-box/anchor/anchor-sand-box';

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
        component: AnchorSandBox,
        exact: true,
        name: AnchorSandBox.name,
        url: '/library/anchor'
    },
    {
        component: TextSandBox,
        exact: true,
        name: TextSandBox.name,
        url: '/library/text'
    }
];