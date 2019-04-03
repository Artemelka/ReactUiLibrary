import React from 'react';
import { SandBox } from '../sand-box';
import { Button, Icon } from '../../../elements';
import { ButtonProps } from '../../../elements/buttons/button';
import { ButtonIconProps } from '../../../elements/buttons/button-icon';
import { ButtonIconLabelProps } from '../../../elements/buttons/button-icon-label';
import { logger } from '../utils';

const buttonProps: Array<ButtonProps> = [
    {
        label: 'Button'
    }, {
        label: 'Button disabled',
        disabled: true
    }, {
        label: 'Button with onClick',
        onClick: logger('buttonClick')
    }, {
        label: 'Button with disable onClick',
        disabled: true,
        onClick: logger('buttonClick disable')
    }
];
const buttonIconProps: Array<ButtonIconProps> = [
    {
        iconName: 'plus',
        onClick: logger('buttonClick plus')
    }, {
        iconName: 'trash-alt',
        onClick: logger('buttonClick trash-alt')
    }, {
        iconName: 'trash-alt',
        disabled: true,
        onClick: logger('buttonClick trash-alt')
    }
];
const buttonIconLabelProps: Array<ButtonIconLabelProps> = [
    {
        iconName: 'plus',
        label: 'Button.IconLabel',
        onClick: logger('button IconLabel Click plus')
    }, {
        iconName: 'trash-alt',
        label: 'Button.IconLabel trash',
        onClick: logger('button IconLabel Click trash-alt')
    }, {
        iconName: 'trash-alt',
        label: 'Button.IconLabel disabled',
        disabled: true,
        onClick: logger('button IconLabel Click trash-alt')
    }
];

const buttonItems = buttonProps.map(
    (props: ButtonProps, index: number) => <Button {...props} key={index + 'a'} />);

const buttonIconItems = buttonIconProps.map(
    (props: ButtonIconProps, index: number) => <Button.Icon {...props} key={index + 'b'} />);

const buttonIconLabelItems = buttonIconLabelProps.map(
    (props: ButtonIconLabelProps, index: number) => <Button.IconLabel {...props} key={index + 'c'} />);

const sandBoxItems = [
    ...buttonItems,
    ...buttonIconItems,
    ...buttonIconLabelItems
];

export const ButtonSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
