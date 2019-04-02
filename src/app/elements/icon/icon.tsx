import React, { Component } from 'react';
import classNames from 'classnames';

interface Props {
    border?: boolean;
    inverse?: boolean;
    name: string;
    pulse?: boolean;
    size?: string;
    spin?: boolean;
    stack?: string;
    fontSize?: number;
}

export class Icon extends Component<Props> {
    render() {
        const { border, fontSize, inverse, name, pulse, size, spin, stack } = this.props;
        const style = fontSize ? {fontSize: `${fontSize}px`} : {};
        const finalClasses = classNames(`Icon fa-${name}`, {
            'fa': !stack,
            [stack]: stack,
            'fa-border': border,
            [`fa-${size}`]: size,
            'fa-inverse': inverse,
            'fa-spin': spin,
            'fa-pulse': pulse
        });

        return <span className={finalClasses} style={style}/>;
    }
}
