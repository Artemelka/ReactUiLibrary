import React, { Component } from 'react';
import { Button, ButtonNotRequiredProps } from './button';
import { Icon } from '../';
import { ICON_SIZE } from './constants';

export interface ButtonIconProps extends ButtonNotRequiredProps {
    iconName: string;
}

export class ButtonIcon extends Component<ButtonIconProps> {
    render() {
        const { iconName, ...restProps } = this.props;

        return (
            <Button {...restProps} icon label="">
                <Icon name={iconName} fontSize={ICON_SIZE}/>
            </Button>
        );
    }
}
