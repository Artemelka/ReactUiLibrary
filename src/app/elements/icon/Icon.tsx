import React from 'react';
import classNames from 'classnames';
import { IconProps } from './types';

export const Icon = ({ border, fontSize, inverse, name, pulse, size, spin, stack }: IconProps) => (
    <span
        className={classNames(`Icon fa-${name}`, {
            'fa': !stack,
            [stack]: stack,
            'fa-border': border,
            [`fa-${size}`]: size,
            'fa-inverse': inverse,
            'fa-spin': spin,
            'fa-pulse': pulse
        })}
        style={fontSize ? {fontSize: `${fontSize}px`} : {}}
    />
);
