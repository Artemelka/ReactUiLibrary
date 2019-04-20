import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./Progress.less');
const cn = classNames.bind(style);

interface Props {
    value: number;
}

export class ProgressLinear extends Component<Props> {
    static defaultProps = {
        value: 50
    };

    render() {
        const { value } = this.props;
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
    }
}
