import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { FooterProps } from '../types';
import style from './Footer.less';

const cn = classNames.bind(style);

export class Footer extends Component<FooterProps> {
    render() {
        const { children, footerAside: FooterAside, rightContent: RightContent } = this.props;

        return (
            <footer className={cn('Footer')}>
                {FooterAside && (
                    <div className={cn('Footer__aside')}>
                        <FooterAside />
                    </div>
                )}
                <div className={cn('Footer__main')}>
                    <div className={cn('Footer__content')}>
                        {children}
                    </div>
                    {RightContent && (
                        <div className={cn('Footer__right-content')}>
                            <RightContent />
                        </div>
                    )}
                </div>
            </footer>
        );
    }
}
