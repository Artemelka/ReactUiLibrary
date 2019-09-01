import React from 'react';
import classNames from 'classnames';
import { IconProps } from './types';

export const Icon = ({ border, fontSize, inverse, name, pulse, size, spin, stack }: IconProps) => {
    const finalClasses = classNames(`Icon fa-${name}`, {
        'fa': !stack,
        [stack]: stack,
        'fa-border': border,
        [`fa-${size}`]: size,
        'fa-inverse': inverse,
        'fa-spin': spin,
        'fa-pulse': pulse
    });

    return <span className={finalClasses} style={fontSize ? {fontSize: `${fontSize}px`} : {}}/>;
};
