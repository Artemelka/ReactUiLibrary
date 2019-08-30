import React from 'react';
import { Button } from './Button';
import { IconModule } from '../icon';
import { BUTTON_ICON_SIZE } from './constants';
import { ButtonIconProps } from './types';

export const ButtonIcon = ({ iconName, ...restProps }: ButtonIconProps) => (
    <Button {...restProps} icon label="">
        <IconModule.Icon name={iconName} fontSize={BUTTON_ICON_SIZE}/>
    </Button>
);
