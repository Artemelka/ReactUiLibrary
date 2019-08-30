import { ReactElement } from 'react';

export interface TextProps {
    align?: string;
    bold?: boolean;
    children: string | ReactElement;
    headingType?: symbol;
    light?: boolean;
    size?: number;
    type?: symbol;
    upper?: boolean;
}

export interface Paragraph {
    className: string;
    style: {[key: string]: string | number};
    text: string | ReactElement;
}

export interface Heading extends Paragraph {
    type: symbol;
}
