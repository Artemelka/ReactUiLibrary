import React from 'react';
import {
    AnchorSandBox,
    ButtonSandBox,
    ButtonGroupSandBox,
    CheckboxSandBox,
    DropDownPanelSandBox,
    IconSandBox,
    InputSandBox,
    ProgressSandBox,
    SelectSandBox,
    TextSandBox
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
    },  {
        component: DropDownPanelSandBox,
        exact: true,
        name: DropDownPanelSandBox.name,
        url: '/library/drop-down-panel'
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
        component: ProgressSandBox,
        exact: true,
        name: ProgressSandBox.name,
        url: '/library/progress'
    },  {
        component: SelectSandBox,
        exact: true,
        name: SelectSandBox.name,
        url: '/library/select'
    }, {
        component: TextSandBox,
        exact: true,
        name: TextSandBox.name,
        url: '/library/text'
    }
];
