import React, { Component } from 'react';
import classNames from 'classnames';
import { Button } from './button';
import { ButtonIconProps } from './ButtonIcon';
import { IconModule } from '../';
import { ICON_SIZE } from './constants';
import './Button.less';

export interface ButtonIconLabelProps extends ButtonIconProps {
    label: string;
}

export class ButtonIconLabel extends Component<ButtonIconLabelProps> {
    render() {
        const {iconName, label, ...restProps} = this.props;

        return (
            <Button {...restProps} icon label="">
                <span className={classNames('Button__icon-content')}>
                    <IconModule.Icon name={iconName} fontSize={ICON_SIZE}/>
                </span>
                <span className={classNames('Button__label-content')}>
                    {label}
                </span>
            </Button>
        );
    }
}
