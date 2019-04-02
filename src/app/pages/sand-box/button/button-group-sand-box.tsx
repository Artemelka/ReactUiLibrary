import React, { Fragment } from 'react';
import { SandBox } from '../sand-box';
import { ButtonGroup, Text } from '../../../elements';

const buttons = [
    {
        children: 'first button'
    }, {
        children: 'second button'
    }
];
const roundButtons = [
    {
        children: 'round first button'
    }, {
        children: 'round second button'
    }, {
        children: 'round third button'
    }
];
const buttonGroupItems = [
    {
        buttons,
        props: {},
        title: 'Button group'
    }, {
        buttons,
        props: {separatorSize: 16},
        title: 'Button group with separator'
    }, {
        buttons: roundButtons,
        props: {round: true},
        title: 'Button group rounded'
    }
];

const sandBoxItems = buttonGroupItems.map(({buttons, props, title}, index) => (
        <Fragment>
            <Text.H3>{title}</Text.H3>
            <ButtonGroup buttons={buttons} {...props} key={index} />
        </Fragment>
));

export const ButtonGroupSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
