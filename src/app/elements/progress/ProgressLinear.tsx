import React from 'react';
import classNames from 'classnames';
import './Progress.less';

interface Props {
    value: number;
}

export class ProgressLinear extends React.Component<Props> {
    static defaultProps = {
        value: 50
    };

    render() {
        const { value } = this.props;
        const countStyle = {width: `${value}%`};
        const progressStatusClasses = classNames('Progress__status', {
            'Progress__status--blue': (value > 50) && (value < 80),
            'Progress__status--crimson': value <= 20,
            'Progress__status--green': value > 80,
            'Progress__status--yellow': (value > 20) && (value <= 50)
        });

        return (
            <div className={classNames('Progress')}>
                <div className={classNames('Progress__line')}>
                    <div
                        className={progressStatusClasses}
                        style={countStyle}
                    />
                </div>
            </div>
        );
    }
}
