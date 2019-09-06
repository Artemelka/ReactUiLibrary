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
    ModalSandBox,
    ProgressSandBox,
    RadioButtonsSandBox,
    SelectSandBox,
    TextSandBox,
    TextareaSandBox
} from './components';
import { LIBRARY_URL, INPUT_SUB_URL } from '../../constants';

const MenuSandBox = () => <div>MENU</div>;

export const ComponentsPages = [
    {
        component: MenuSandBox,
        exact: true,
        name: MenuSandBox.name,
        url: LIBRARY_URL
    }, {
        component: AnchorSandBox,
        // exact: true,
        name: AnchorSandBox.name,
        url: `${LIBRARY_URL}/anchor`
    }, {
        component: ButtonSandBox,
        exact: true,
        name: ButtonSandBox.name,
        url: `${LIBRARY_URL}/button`
    }, {
        component: ButtonGroupSandBox,
        exact: true,
        name: ButtonGroupSandBox.name,
        url: `${LIBRARY_URL}/button-group`
    }, {
        component: CardListSandBox,
        exact: true,
        name: CardListSandBox.name,
        url: `${LIBRARY_URL}/card-list`
    }, {
        component: DropDownPanelSandBox,
        exact: true,
        name: DropDownPanelSandBox.name,
        url: `${LIBRARY_URL}/drop-down-panel`
    }, {
        component: IconSandBox,
        exact: true,
        name: IconSandBox.name,
        url: `${LIBRARY_URL}/icon`
    }, [
        {
            component: CheckboxSandBox,
            exact: true,
            name: CheckboxSandBox.name,
            url: `${LIBRARY_URL}${INPUT_SUB_URL}/checkbox`
        }, {
            component: InputSandBox,
            exact: true,
            name: InputSandBox.name,
            url: `${LIBRARY_URL}${INPUT_SUB_URL}/text-input`
        }, {
            component: RadioButtonsSandBox,
            exact: true,
            name: RadioButtonsSandBox.name,
            url: `${LIBRARY_URL}${INPUT_SUB_URL}/radio-buttons`
        }, {
            component: SelectSandBox,
            exact: true,
            name: SelectSandBox.name,
            url: `${LIBRARY_URL}${INPUT_SUB_URL}/select`
        }, {
            component: TextareaSandBox,
            exact: true,
            name: TextareaSandBox.name,
            url: `${LIBRARY_URL}${INPUT_SUB_URL}/textarea`
        }
    ], {
        component: ModalSandBox,
        exact: true,
        name: ModalSandBox.name,
        url: `${LIBRARY_URL}/modal`
    }, {
        component: ProgressSandBox,
        exact: true,
        name: ProgressSandBox.name,
        url: `${LIBRARY_URL}/progress`
    }, {
        component: TextSandBox,
        exact: true,
        name: TextSandBox.name,
        url: `${LIBRARY_URL}/text`
    }
];
