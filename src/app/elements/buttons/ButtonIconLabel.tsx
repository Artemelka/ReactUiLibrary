import React, { Component } from 'react';
import classNames from 'classnames';
import { Button } from './button';
import { ButtonIconProps } from './ButtonIcon';
import { IconModule } from '../';
import { ICON_SIZE } from './constants';

const style = require('./Button.less');
const cn = classNames.bind(style);

export interface ButtonIconLabelProps extends ButtonIconProps {
    label: string;
}

export class ButtonIconLabel extends Component<ButtonIconLabelProps> {
    render() {
        const {iconName, label, ...restProps} = this.props;

        return (
            <Button {...restProps} icon label="">
                <span className={cn('Button__icon-content')}>
                    <IconModule.Icon name={iconName} fontSize={ICON_SIZE}/>
                </span>
                <span className={cn('Button__label-content')}>
                    {label}
                </span>
            </Button>
        );
    }
}
