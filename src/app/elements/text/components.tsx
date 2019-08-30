import React from 'react';
import { TextComponent } from './Text';
import { ComponentType, HeadingType } from './constants';
import { TextProps, Paragraph, Heading } from './types';

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

export const HeadingComponent = ({className, style, text, type}: Heading) => {
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

export const ParagraphComponent = ({className, style, text}: Paragraph) => <p className={className} style={style}>{text}</p>;

export const Span = ({className, style, text}: Paragraph) => <span className={className} style={style}>{text}</span>;
