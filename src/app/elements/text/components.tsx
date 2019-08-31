import React from 'react';
import { TextComponent } from './Text';
import { TextComponentType } from './constants';
import { TextBaseProps, TagComponentProps } from './types';

export const getTextComponent = (type: symbol) => (props: TextBaseProps) => {
    const { children, ...restProps } = props;

    return <TextComponent {...restProps} type={type}>{children}</TextComponent>;
};

export const TagComponent = ({className, children, type}: TagComponentProps) => {
    switch (type) {
        case TextComponentType.HEADING.H1:
            return <h1 className={className}>{children}</h1>;
        case TextComponentType.HEADING.H2:
            return <h2 className={className}>{children}</h2>;
        case TextComponentType.HEADING.H3:
            return <h3 className={className}>{children}</h3>;
        case TextComponentType.HEADING.H4:
            return <h4 className={className}>{children}</h4>;
        case TextComponentType.HEADING.H5:
            return <h5 className={className}>{children}</h5>;
        case TextComponentType.HEADING.H6:
            return <h6 className={className}>{children}</h6>;
        case TextComponentType.PARAGRAPH:
            return <p className={className}>{children}</p>;
        case TextComponentType.SPAN:
            return <span className={className}>{children}</span>;
        default: return <span className={className}>{children}</span>;
    }
};
