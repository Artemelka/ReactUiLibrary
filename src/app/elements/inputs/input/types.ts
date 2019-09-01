import { KeyboardEvent, MouseEvent, RefObject, SyntheticEvent } from 'react';

type IconProps = {
    alwaysVisible?: boolean;
    name: string;
    onClick: () => void;
};
export type InputState = { focused: boolean };

export interface InputProps {
    cursorPointer?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    icon?: IconProps;
    id: string;
    InputIconRef?: RefObject<HTMLButtonElement>;
    inputRef?: RefObject<HTMLInputElement>;
    name?: string;
    onBlur?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (event: SyntheticEvent<HTMLInputElement>, value?: string) => void;
    onClick?: (event: MouseEvent<HTMLInputElement> | KeyboardEvent) => void;
    onFocus?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    readOnly?: boolean;
    value?: string;
    width?: number;
}

export interface TextInputProps extends InputProps {
    onRef?: (ref: HTMLInputElement) => void;
}
