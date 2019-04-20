import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../icon';
import { Button } from '..';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);
const { ANGLE, TRASH } = IconModule.IconNames;

interface Props {
    onAction?: () => void;
    onChange?: () => void;
    opened?: boolean;
}

export class DropDownSummary extends Component<Props> {
    render() {
        const { children, onAction, onChange, opened } = this.props;
        const iconName = opened ? ANGLE.UP : ANGLE.DOWN;
        const styleName = cn('Drop-down-panel__summary');

        return (
            <div className={styleName}>
                <div className={cn('Drop-down-panel__summary-icon')}>
                    <Button.Icon iconName={iconName} onClick={onChange}/>
                </div>
                <div className={cn('Drop-down-panel__summary-content')}>
                    {children}
                </div>
                {onAction &&
                    <div className={cn('Drop-down-panel__summary-action')}>
                        <Button.Icon iconName={TRASH} onClick={onAction}/>
                    </div>
                }
            </div>
        );
    }
}
