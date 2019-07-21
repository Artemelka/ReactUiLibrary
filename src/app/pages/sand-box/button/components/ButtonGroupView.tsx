import React from 'react';
import { SandboxLayout } from '../../../../components';
import { Button, ButtonGroup, IconModule, Text } from '../../../../elements';

const { BlockItems, Item } = SandboxLayout;
const buttons = [
    {
        label: 'first button',
        iconName: IconModule.IconNames.PLUS
    }, {
        label: 'second button',
        iconName: IconModule.IconNames.PHONE
    }, {
        label: 'third button',
        iconName: IconModule.IconNames.TRASH
    }
];
const buttonGroupItems = [
    {
        props: {},
        title: 'Button group'
    }, {
        props: {separatorSize: ButtonGroup.SeparatorSize.MEDIUM},
        title: 'Button group with separator medium'
    }, {
        props: {round: true},
        title: 'Button group rounded'
    }, {
        props: {buttonComponent: Button.IconLabel},
        title: 'Button group IconLabel'
    }, {
        props: {buttonComponent: Button.Icon},
        title: 'Button group Icon'
    }
];

export const ButtonGroupView = () => (
    <BlockItems>
        {buttonGroupItems.map(({props, title}, index) => (
            <Item key={title + index}>
                <Text.H5>{title}</Text.H5>
                <ButtonGroup.Component buttons={buttons} {...props} />
            </Item>
        ))}
    </BlockItems>
);
