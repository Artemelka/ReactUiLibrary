import React, { Component } from 'react';
import classNames from 'classnames';
import './Input.less';

export class Input extends Component {
    render() {
        return (
            <input
                className={classNames('Input')}
                {...this.props}
            />
        );
    }
}
