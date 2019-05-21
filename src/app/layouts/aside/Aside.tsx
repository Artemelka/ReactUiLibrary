import React, { Component } from 'react';
import { Text } from '../../elements';
import classNames from 'classnames/bind';

const style = require('./Aside.less');
const cn = classNames.bind(style);

interface Props {
    footerText?: string;
    heading: string;
    withoutHeader?: boolean;
}

export class Aside extends Component<Props> {
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
