import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./PageLayout.less');
const cn = classNames.bind(style);

export class PageLayout extends Component {
    render() {
        return (
            <div className={cn('Page-layout')}>
                {this.props.children}
            </div>
        );
    }
}
