import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);

interface Props {
    opened?: boolean;
}

export class DropDownDetails extends Component<Props> {
    render() {
        return (
            <div className={cn('Drop-down-panel__details')}>
                {this.props.children}
            </div>
        );
    }
}
