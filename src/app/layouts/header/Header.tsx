import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./Header.less');
const cn = classNames.bind(style);

export class Header extends Component {
    render() {
        return (
            <header className={cn('Header')}>
                {this.props.children}
            </header>
        );
    }
}
