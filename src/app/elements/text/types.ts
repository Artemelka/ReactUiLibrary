import { ReactNode } from 'react';

export interface TextBaseProps {
    align?: string;
    bold?: boolean;
    children: string | ReactNode;
    light?: boolean;
    upper?: boolean;
}

export interface TextProps extends TextBaseProps {
    type: symbol;
}

export interface TagComponentProps {
    className: string;
    children: string | ReactNode;
    type: symbol;
}
