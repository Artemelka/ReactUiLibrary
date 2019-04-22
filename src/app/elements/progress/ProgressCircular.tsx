import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./Progress.less');
const cn = classNames.bind(style);

const ZERO_STATUS = 326;

interface Props {
    size: number;
    value: number;
}
export class ProgressCircular extends Component<Props> {
    getValue = () => {
        const { value } = this.props;
        const onePercent = ZERO_STATUS / 100;
        const valueToPercent = value * onePercent;

        return ZERO_STATUS - valueToPercent;
    };

    render() {
        const { size = 100, value } = this.props;
        const text = `${value}%`;
        const statusStyle = { strokeDashoffset: this.getValue() };
        const circleStyle = {
            height: size,
            width: size
        };
        const circleSize = {
            cx: size / 2,
            cy: size / 2,
            r: size / 2 - 5
        };

        return (
            <div className={cn('Progress', 'Progress--circular')} style={circleStyle}>
                <div className={cn('Progress__title', 'Progress__title--circular')}>
                    {text}
                </div>
                <svg className={cn('Progress__circle')} style={circleStyle}>
                    <circle className={cn('Progress__circle-line')} {...circleSize}/>
                    <circle
                        className={cn('Progress__circle-status')}
                        {...circleSize}
                        style={statusStyle}
                    />
                </svg>
            </div>
        );
    }
}
