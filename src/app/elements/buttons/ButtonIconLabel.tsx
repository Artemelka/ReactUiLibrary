import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Button } from './Button';
import { IconModule } from '../icon';
import { ICON_SIZE, ICON_SIZE_SMALL, ICON_SIZE_MEDIUM, ButtonSize } from './constants';
import { ButtonIconLabelProps } from './types';

const style = require('./Button.less');
const cn = classNames.bind(style);

export class ButtonIconLabel extends Component<ButtonIconLabelProps> {
    constructor(props: ButtonIconLabelProps) {
        super(props);
        const { size } = props;

        if (size) {
            this.iconSize = size === ButtonSize.SMALL ? ICON_SIZE_SMALL : ICON_SIZE;
        }
    }

    iconSize = ICON_SIZE_MEDIUM;

    render() {
        const {iconName, label, size, ...restProps} = this.props;

        return (
            <Button {...restProps} iconLabel label="" size={size}>
                <span className={cn('Button__icon-content')}>
                    <IconModule.Icon name={iconName} fontSize={this.iconSize}/>
                </span>
                <span className={cn('Button__label-content')}>
                    {label}
                </span>
            </Button>
        );
    }
}
