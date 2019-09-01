import { KeyboardEvent, MouseEvent, RefObject, SyntheticEvent } from 'react';

export interface TextareaProps {
    cols?: number;
    darkTheme?: boolean;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    id: string;
    maxlength?: number;
    name: string;
    onBlur?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: SyntheticEvent<HTMLTextAreaElement>, value?: string) => void;
    onClearClick?: () => void;
    onClick?: (event: MouseEvent<HTMLTextAreaElement> | KeyboardEvent) => void;
    onFocus?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    onRef?: RefObject<HTMLTextAreaElement>;
    placeholder?: string;
    readonly?: boolean;
    rows?: number;
    value: string;
}

export type TextareaContainerState = {
    error: boolean,
    errorMessage: string
};

export interface TextareaContainerProps extends TextareaProps {
    defaultErrorMessage: string;
}

export type ErrorParams = {
    error: boolean,
    errorMessage: string
};
