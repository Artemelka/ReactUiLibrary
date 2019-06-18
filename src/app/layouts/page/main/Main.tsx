import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./Main.less');
const cn = classNames.bind(style);

interface Props {
    fullWidth?: boolean;
    withoutHeader?: boolean;
}

export class Main extends Component<Props> {
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
