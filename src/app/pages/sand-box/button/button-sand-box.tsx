import React from 'react';
import { SandBox } from '../sand-box';
import { Button } from '../../../elements';
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
    },
];

const buttonItems = buttonProps.map((props, index) => <Button {...props} key={index}/>);

export const ButtonSandBox = () => (
    <SandBox
        items={buttonItems}
    />
);
