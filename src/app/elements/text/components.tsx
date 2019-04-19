import React from 'react';
import { TextComponent, TextProps } from './Text';
import { ComponentType, HeadingType } from './constants';

interface Paragraph {
    className: string;
    style: {[key: string]: string | number};
    text: string;
}
interface Heading extends Paragraph {
    type: symbol;
}

export const getComponentText = (type: symbol, headingType?: symbol) => (props: TextProps) => {
    const { children, ...restProps } = props;

    return (
        <TextComponent
            {...restProps}
            headingType={headingType}
            type={type}
            children={children}
        />
    );
};

export const getHeading = (type: symbol) => getComponentText(ComponentType.HEADING, type);

export const Heading = ({className, style, text, type}: Heading) => {
    switch (type) {
        case HeadingType.H1:
            return <h1 className={className} style={style}>{text}</h1>;
        case HeadingType.H2:
            return <h2 className={className} style={style}>{text}</h2>;
        case HeadingType.H3:
            return <h3 className={className} style={style}>{text}</h3>;
        case HeadingType.H4:
            return <h4 className={className} style={style}>{text}</h4>;
        case HeadingType.H5:
            return <h5 className={className} style={style}>{text}</h5>;
        case HeadingType.H6:
            return <h6 className={className} style={style}>{text}</h6>;
        default: return;
    }
};

export const Paragraph = ({className, style, text}: Paragraph) => <p className={className} style={style}>{text}</p>;

export const Span = ({className, style, text}: Paragraph) => <span className={className} style={style}>{text}</span>;
