import React, { Component } from 'react';
import classNames from 'classnames';
import './default-input.less';

export class DefaultInput extends Component {
    render() {
        return (
            <input
                className={classNames('Input-text')}
                {...this.props}
            />
        );
    }
}
