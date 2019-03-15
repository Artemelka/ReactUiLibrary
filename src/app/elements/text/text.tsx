import * as React from 'react';
import classNames from 'classnames';
import {
    getComponentText,
    getHeading,
    Heading,
    Paragraph,
    Span,
} from './components';
import { ComponentType, HeadingType } from './constants';
import './text.less';

interface Props {
    bold?: boolean;
    children: string;
    headingType?: symbol;
    light?: boolean;
    size?: number;
    type?: symbol;
    upper?: boolean;
}

export type TextProps = Props;

const WarningMessages = {
    TEXT: '!!!!!TextParagraph style expected two font-weight "bold & light"!!!',
    STATUS: '!!!!!Used font-weight: LIGHT'
};

export class TextComponent extends React.Component<Props> {
    static defaultProps = {
        headingType: HeadingType.H1,
        type: ComponentType.PARAGRAPH
    };

    static H1 = getHeading(HeadingType.H1);
    static H2 = getHeading(HeadingType.H2);
    static H3 = getHeading(HeadingType.H3);
    static H4 = getHeading(HeadingType.H4);
    static H5 = getHeading(HeadingType.H5);
    static H6 = getHeading(HeadingType.H6);
    static Paragraph = getComponentText(ComponentType.PARAGRAPH);
    static Span = getComponentText(ComponentType.SPAN);

    selectComponent = () => {
        switch (this.props.type) {
            case ComponentType.HEADING:
                return Heading;
            case ComponentType.PARAGRAPH:
                return Paragraph;
            case ComponentType.SPAN:
                return Span;
            default: return;
        }
    };

    getClassName = () => {
        const { bold, headingType, light, type, upper } = this.props;
        const isHeading = type === ComponentType.HEADING;

        if (bold && light) {
            console.warn(WarningMessages.TEXT, WarningMessages.STATUS);
        }

        return classNames('Text', {
            'Text--heading-h1': isHeading && headingType === HeadingType.H1,
            'Text--heading-h2': isHeading && headingType === HeadingType.H2,
            'Text--heading-h3': isHeading && headingType === HeadingType.H3,
            'Text--heading-h4': isHeading && headingType === HeadingType.H4,
            'Text--heading-h5': isHeading && headingType === HeadingType.H5,
            'Text--heading-h6': isHeading && headingType === HeadingType.H6,
            'Text--heading': isHeading,
            'Text--paragraph': type === ComponentType.PARAGRAPH,
            'Text--span': type === ComponentType.SPAN,
            'Text--upper': upper,
            'Text--light': light,
            'Text--bold': bold
        });
    };

    render() {
        const { headingType, children, size, type } = this.props;
        const paragraphStyle = size ? { fontSize: `${size}px` } : {};
        const typeProp = type === ComponentType.HEADING ? headingType : undefined;
        const Component = this.selectComponent();

        return (
            <Component
                className={this.getClassName()}
                style={paragraphStyle}
                text={children}
                type={typeProp}
            />
        );
    }
}