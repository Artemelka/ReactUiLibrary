import React from 'react';
import classNames from 'classnames/bind';

const style = require('./Progress.less');
const cn = classNames.bind(style);

interface Props {
    value: number;
}

export class ProgressText extends React.Component<Props> {
    static defaultProps = {
        value: 50
    };

    render() {
        const { value } = this.props;

        return (
            <div className={cn('Progress')}>
                <p className={cn('Progress__title')}>
                    Progress status: {value}%
                </p>
            </div>
        );
    }
}
