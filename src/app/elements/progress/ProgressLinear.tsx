import React from 'react';
import classNames from 'classnames/bind';
import { getValidPercent } from './utils';
import { ProgressProps } from './types';
import style from './Progress.less';

const cn = classNames.bind(style);

export const ProgressLinear = ({ percent }: ProgressProps) => {
    const value = getValidPercent(percent);
    const countStyle = {width: `${value}%`};
    const progressStatusClasses = cn('Progress__status', {
        'Progress__status--blue': (value > 50) && (value < 80),
        'Progress__status--crimson': value <= 20,
        'Progress__status--green': value > 80,
        'Progress__status--yellow': (value > 20) && (value <= 50)
    });

    return (
        <div className={cn('Progress')}>
            <div className={cn('Progress__line')}>
                <div
                    className={progressStatusClasses}
                    style={countStyle}
                />
            </div>
        </div>
    );
};
