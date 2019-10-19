import { KeyboardEvent, MouseEvent, RefObject, SyntheticEvent } from 'react';

type IconProps = {
    alwaysVisible?: boolean;
    name: string;
    onClick: () => void;
};
export type InputState = { focused: boolean };

interface InputBaseProps {
    cursorPointer?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    id: string;
    InputIconRef?: RefObject<HTMLButtonElement>;
    inputRef?: RefObject<HTMLInputElement>;
    name: string;
    onBlur?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (event: SyntheticEvent<HTMLInputElement>, value?: string) => void;
    onClick?: (event: MouseEvent<HTMLInputElement> | KeyboardEvent) => void;
    onFocus?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    required?: boolean;
    value: string;
    width?: number;
}

export interface InputUiProps extends InputBaseProps {
    defaultErrorMessage?: string;
    focused?: boolean;
    iconProps?: IconProps;
}

export interface InputProps extends InputBaseProps{
    defaultValue?: string;
    icon?: IconProps;
    readOnly?: boolean;
}

export interface TextInputProps extends InputProps {
    onRef?: (ref: HTMLInputElement) => void;
}
