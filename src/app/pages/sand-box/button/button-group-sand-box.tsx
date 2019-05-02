import React, { Fragment } from 'react';
import { SandBox } from '../sand-box';
import { Button, ButtonGroup, IconModule, Text } from '../../../elements';

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
        buttons,
        props: {},
        title: 'Button group'
    }, {
        buttons,
        props: {separatorSize: ButtonGroup.SeparatorSize.MEDIUM},
        title: 'Button group with separator medium'
    }, {
        buttons,
        props: {round: true},
        title: 'Button group rounded'
    }, {
        buttons,
        props: {buttonComponent: Button.IconLabel},
        title: 'Button group IconLabel'
    }, {
        buttons,
        props: {buttonComponent: Button.Icon},
        title: 'Button group Icon'
    }
];

const sandBoxItems = buttonGroupItems.map(({buttons, props, title}, index) => (
        <Fragment>
            <Text.H3>{title}</Text.H3>
            <ButtonGroup.Component buttons={buttons} {...props} key={index} />
        </Fragment>
));

export const ButtonGroupSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
