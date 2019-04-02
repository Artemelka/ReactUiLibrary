import React from 'react';
import { SandBox } from '../sand-box';
import { Button, Icon } from '../../../elements';
import { logger } from '../utils';

const buttonProps = [
    {
        label: 'Button'
    }, {
        disabled: true,
        label: 'Button disabled'
    }, {
        label: 'Button with onClick',
        onClick: logger('buttonClick')
    }, {
        disabled: true,
        label: 'Button with disable onClick',
        onClick: logger('buttonClick')
    }, {
        label: <Icon name="plus" fontSize={18}/>,
        onClick: logger('buttonClick')
    }, {
        label: <Icon name="trash-alt" fontSize={18}/>,
        onClick: logger('buttonClick')
    },
];

const buttonItems = buttonProps.map(({label, ...restProps}, index) =>
    <Button {...restProps} key={index}>{label}</Button>
);

export const ButtonSandBox = () => (
    <SandBox
        items={buttonItems}
    />
);
