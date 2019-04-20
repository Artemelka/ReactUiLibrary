import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./Input.less');
const cn = classNames.bind(style);

export class Input extends Component {
    render() {
        return (
            <input
                className={cn('Input')}
                {...this.props}
            />
        );
    }
}
