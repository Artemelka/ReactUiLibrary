import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./Main.less');
const cn = classNames.bind(style);

export class Main extends Component {
    render() {
        return (
            <main className={cn('Main')}>
                {this.props.children}
            </main>
        );
    }
}
