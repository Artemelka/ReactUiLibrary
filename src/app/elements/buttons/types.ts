import { RefObject, SyntheticEvent } from 'react';

export type ButtonState = { isActive: boolean };

interface ButtonNotRequiredProps {
    accent?: boolean;
    buttonRef?: RefObject<HTMLButtonElement>;
    disabled?: boolean;
    icon?: boolean;
    iconLabel?: boolean;
    onClick?: (event: SyntheticEvent) => void;
    roundLeft?: boolean;
    roundRight?: boolean;
    size?: string;
    type?: 'button' | 'submit' | 'reset';
}
export interface ButtonProps extends ButtonNotRequiredProps {
    label: string;
}

export interface ButtonIconProps extends ButtonNotRequiredProps {
    iconName: string;
}

export interface ButtonIconLabelProps extends ButtonIconProps {
    label: string;
}
