import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { MainProps } from '../types';
import style from './Main.less';

const cn = classNames.bind(style);

export class Main extends Component<MainProps> {
    render() {
        const { children, fullWidth, withoutHeader } = this.props;

        return (
            <main
                className={cn('Main', {
                    'Main--full-width': fullWidth,
                    'Main--without-header': withoutHeader
                })}
            >
                {children}
            </main>
        );
    }
}
