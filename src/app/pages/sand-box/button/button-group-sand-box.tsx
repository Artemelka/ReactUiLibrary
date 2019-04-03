import React, { Fragment } from 'react';
import { SandBox } from '../sand-box';
import { ButtonGroup, Text } from '../../../elements';

const buttons = [
    {
        label: 'first button'
    }, {
        label: 'second button'
    }, {
        label: 'third button'
    }
];
const buttonGroupItems = [
    {
        buttons,
        props: {},
        title: 'Button group'
    }, {
        buttons,
        props: {separatorSize: ButtonGroup.SeparatorSize.SMALL},
        title: 'Button group with separator small'
    }, {
        buttons,
        props: {separatorSize: ButtonGroup.SeparatorSize.MEDIUM},
        title: 'Button group with separator medium'
    }, {
        buttons,
        props: {round: true},
        title: 'Button group rounded'
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
