import React, { PureComponent } from 'react';
import classNames from 'classnames/bind';
import { TagComponent } from './components';
import { TextComponentType, WarningMessages } from './constants';
import { TextProps } from './types';
import style from './Text.less';

const cn = classNames.bind(style);

export class TextComponent extends PureComponent<TextProps> {
    render() {
        const { align, bold, light, upper, children, type } = this.props;
        const isHeading = Object.values(TextComponentType.HEADING).includes(type);

        if (bold && light) {
            console.warn(WarningMessages.TEXT, WarningMessages.STATUS);
        }

        return (
            <TagComponent
                className={cn('Text', {
                    'Text--center': align === 'center',
                    'Text--right': align === 'right',
                    'Text--upper': upper,
                    'Text--light': light,
                    'Text--bold': bold,
                    'Text--heading-h1': type === TextComponentType.HEADING.H1,
                    'Text--heading-h2': type === TextComponentType.HEADING.H2,
                    'Text--heading-h3': type === TextComponentType.HEADING.H3,
                    'Text--heading-h4': type === TextComponentType.HEADING.H4,
                    'Text--heading-h5': type === TextComponentType.HEADING.H5,
                    'Text--heading-h6': type === TextComponentType.HEADING.H6,
                    'Text--heading': isHeading,
                    'Text--paragraph': type === TextComponentType.PARAGRAPH,
                    'Text--span': type === TextComponentType.SPAN,
                })}
                type={type}
            >
                {children}
            </TagComponent>
        );
    }
}
