import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { getValidPercent } from './utils';

const style = require('./Progress.less');
const cn = classNames.bind(style);

const textProps = {
    dy: '.3em',
    x: '50%',
    y: '50%',
    textAnchor: 'middle'
};

interface Props {
    darkColor?: boolean;
    percent: number;
    strokeWidth: number;
    radius: number;
}
export class ProgressCircular extends Component<Props> {
    render() {
        const { darkColor, percent: value, strokeWidth, radius } = this.props;
        const percent = getValidPercent(value);
        const diameter = radius * 2;
        const viewBox = `0 0 ${diameter} ${diameter}`;
        const transform = `rotate(-90 ${radius} ${radius})`;
        const dashRadius = (diameter - strokeWidth) / 2;
        const dashArray = dashRadius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * percent / 100;
        const circlesProps = {
            cx: radius,
            cy: radius,
            r: dashRadius,
            strokeWidth: `${strokeWidth}px`
        };
        const circleStatusStyle = { strokeDashoffset: dashOffset };
        const textStyle = { fontSize: `${radius / 2}` };

        return (
            <div className={cn('Progress', 'Progress--circular')}>
                <svg
                    className={cn('Progress__circle', {'Progress__circle--dark': darkColor})}
                    width={diameter}
                    height={diameter}
                    viewBox={viewBox}
                >
                    <circle
                        className={cn('Progress__circle-line')}
                        {...circlesProps}
                    />
                    <circle
                        className={cn('Progress__circle-status')}
                        {...circlesProps}
                        strokeDasharray={dashArray}
                        style={circleStatusStyle}
                        transform={transform}
                    />
                    <text
                        className={cn('Progress__circle-text')}
                        {...textProps}
                        style={textStyle}
                    >
                        {`${percent}%`}
                    </text>
                </svg>
            </div>
        );
    }
}
