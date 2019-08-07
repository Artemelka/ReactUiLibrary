import React from 'react';
import {
    AnchorSandBox,
    ButtonSandBox,
    ButtonGroupSandBox,
    CardListSandBox,
    CheckboxSandBox,
    DropDownPanelSandBox,
    IconSandBox,
    InputSandBox,
    ProgressSandBox,
    RadioButtonsSandBox,
    SelectSandBox,
    TextSandBox,
    TextareaSandBox
} from './sand-box';

const MenuSandBox = () => {
    return (
        <div>MENU</div>
    );
};

export const ComponentsCollection = [
    {
        component: MenuSandBox,
        exact: true,
        name: MenuSandBox.name,
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
        component: CardListSandBox,
        exact: true,
        name: CardListSandBox.name,
        url: '/library/card-list'
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
    }, {
        component: RadioButtonsSandBox,
        exact: true,
        name: RadioButtonsSandBox.name,
        url: '/library/radio-buttons'
    }, {
        component: SelectSandBox,
        exact: true,
        name: SelectSandBox.name,
        url: '/library/select'
    }, {
        component: TextSandBox,
        exact: true,
        name: TextSandBox.name,
        url: '/library/text'
    }, {
        component: TextareaSandBox,
        exact: true,
        name: TextareaSandBox.name,
        url: '/library/textarea'
    }
];
