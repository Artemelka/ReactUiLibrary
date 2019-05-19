import React, { Component } from 'react';
import { Button, ButtonNotRequiredProps } from './Button';
import { IconModule } from '../';

const BUTTON_ICON_SIZE = 12;

export interface ButtonIconProps extends ButtonNotRequiredProps {
    iconName: string;
}

export class ButtonIcon extends Component<ButtonIconProps> {
    render() {
        const { iconName, ...restProps } = this.props;

        return (
            <Button {...restProps} icon label="">
                <IconModule.Icon name={iconName} fontSize={BUTTON_ICON_SIZE}/>
            </Button>
        );
    }
}
