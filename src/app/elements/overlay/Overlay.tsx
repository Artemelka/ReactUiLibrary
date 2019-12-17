import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './Overlay.less';

const cn = classNames.bind(style);

interface OverlayProps {
    inContainer?: boolean;
    show: boolean;
}

export class Overlay extends Component<OverlayProps> {
    render() {
        const { children, inContainer, show } = this.props;

        return (show
            ? (
                <div className={cn('Overlay', {'Overlay--in-container': inContainer})}>
                    {children}
                </div>
            ) : null
        );
    }
}
