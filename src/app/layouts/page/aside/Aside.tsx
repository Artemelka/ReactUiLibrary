import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Text } from '../../../elements';
import { AsideProps } from '../types';
import style from './Aside.less';

const cn = classNames.bind(style);

export class Aside extends Component<AsideProps> {
    render() {
        const { children, footerText, heading, withoutHeader } = this.props;

        return (
            <aside className={cn('Aside', {'Aside--without-header': withoutHeader})}>
                <div className={cn('Aside__heading')}>
                    <Text.H6 bold upper>
                        {heading}
                    </Text.H6>
                </div>
                <div className={cn('Aside__content')}>
                    {children}
                </div>
                {
                    Boolean(footerText) &&
                        <div className={cn('Aside__footer')}>
                            {footerText}
                        </div>
                }
            </aside>
        );
    }
}
