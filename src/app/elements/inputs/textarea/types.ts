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
    onRef?: RefObject<HTMLTextAreaElement>;
    placeholder?: string;
    readonly?: boolean;
    rows?: number;
    value: string;
}

export interface TextareaContainerProps extends TextareaProps {
    defaultErrorMessage?: string;
    onBlur?: (event: SyntheticEvent<HTMLTextAreaElement>, value: string, name: string) => void;
    onChange?: (event: SyntheticEvent<HTMLTextAreaElement>, value: string, name: string) => void;
    onClearClick?: () => void;
    onClick?: (event: MouseEvent<HTMLTextAreaElement> | KeyboardEvent, value: string, name: string) => void;
    onFocus?: (event: SyntheticEvent<HTMLTextAreaElement>, value: string, name: string) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>, value: string, name: string) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLTextAreaElement>, value: string, name: string) => void;
}

export interface TextareaUiProps extends TextareaProps {
    onBlur?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    onClearClick?: () => void;
    onClick?: (event: MouseEvent<HTMLTextAreaElement> | KeyboardEvent) => void;
    onFocus?: (event: SyntheticEvent<HTMLTextAreaElement>) => void;
    onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}
