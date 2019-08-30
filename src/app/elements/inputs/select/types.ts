import { FocusEvent } from 'react';

export interface SelectOptions {
    disabled?: boolean;
    title: string;
    value: string;
}
export interface SelectProps {
    disabled?: boolean;
    inputWidth?: number;
    listOpenTop?: boolean;
    multiple?: boolean;
    maxListHeight?: number;
    id: string;
    name: string;
    onChange?: (value: string) => void;
    options: Array<SelectOptions>;
    value: string;
}
export interface SelectState {
    canOpenDown: boolean;
    opened: boolean;
}

export interface SelectListProps {
    items: Array<SelectOptions>;
    onBlur?: (event: FocusEvent) => void;
    onClick?: (item: any) => void;
    selectedItemValue: string;
    style?: {[key: string]: string | number};
}

export interface SelectListItemProps {
    className: string;
    disabled?: boolean;
    index: number;
    listItemRef?: (ref: HTMLLIElement, index: number) => void;
    onBlur?: (event: FocusEvent) => void;
    onClick: (value: string) => void;
    onKeyPress?: (index: number, keyCode: number, shiftKey: boolean) => void;
    title: string;
    value: string;
}
