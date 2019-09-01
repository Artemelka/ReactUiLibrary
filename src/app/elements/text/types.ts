export interface TextBaseProps {
    align?: string;
    bold?: boolean;
    children: string;
    light?: boolean;
    upper?: boolean;
}

export interface TextProps extends TextBaseProps {
    type: symbol;
}

export interface TagComponentProps {
    className: string;
    children: string;
    type: symbol;
}
