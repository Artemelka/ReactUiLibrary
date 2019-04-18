import React from 'react';
import classNames from 'classnames';
import './Progress.less';

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
            <div className={classNames('Progress')}>
                <p className={classNames('Progress__title')}>
                    Progress status: {value}%
                </p>
            </div>
        );
    }
}
