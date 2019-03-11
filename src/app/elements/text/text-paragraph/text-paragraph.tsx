import * as React from 'react';
import classNames from 'classnames';
import './text-paragraph.less';

interface Props {
    upper?: boolean;
    light?: boolean;
    bold?: boolean;
    size?: number;
    children: string;
}

const WarningMessages = {
    message: 'TextParagraph style expected two font-weight "bold & light"!!!',
    status: 'Used font-weight: light'
};

export class TextParagraph extends React.Component<Props> {
    static defaultProps = {
        size: 16
    };

    render() {
        const { bold, children, light, size, upper } = this.props;
        const paragraphClassNames = classNames('Text-paragraph', {
            'Text-paragraph--upper': upper,
            'Text-paragraph--light': light,
            'Text-paragraph--bold': bold
        });
        const paragraphStyle = {
            fontSize: `${size}px`
        };

        if (bold && light) {
            console.warn(WarningMessages.message, WarningMessages.status);
        }

        return (
            <p className={paragraphClassNames} style={paragraphStyle} >
                {children}
            </p>
        );
    }
}