import { KeyboardEvent, RefObject, SyntheticEvent } from 'react';

export type IconProps = {
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
    required?: boolean;
    value: string;
    width?: number;
    withoutError?: boolean;
}

export interface InputUiProps extends InputBaseProps {
    focused?: boolean;
    iconProps?: IconProps;
    onBlur?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onClick?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onFocus?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
}

export interface InputProps extends InputBaseProps {
    defaultValue?: string;
    icon?: IconProps;
    onBlur?: (event: SyntheticEvent<HTMLInputElement>, value: string, name: string) => void;
    onChange?: (event: SyntheticEvent<HTMLInputElement>, value: string, name: string) => void;
    onClick?: (event: SyntheticEvent<HTMLInputElement> | KeyboardEvent, value: string, name: string) => void;
    onFocus?: (event: SyntheticEvent<HTMLInputElement>, value: string, name: string) => void;
    onKeyPress?: (event: KeyboardEvent, value: string, name: string) => void;
    readOnly?: boolean;
}

export interface TextInputProps extends InputProps {
    onRef?: (ref: HTMLInputElement) => void;
}
