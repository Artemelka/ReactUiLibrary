import React, { Component, createRef, KeyboardEvent, RefObject, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../icon';
import { Button } from '../buttons/Button';
import { keyCodes } from '../../../services';
import { DropDownSummaryProps } from './types';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);
const { ANGLE_UP, ANGLE_DOWN } = IconModule.IconNames;
const { ENTER, SPACE } = keyCodes;
const TargetKeyCode = [ENTER, SPACE];

export class DropDownSummary extends Component<DropDownSummaryProps> {
    handleActionClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        this.props.actionIcon.onClick();
    };

    handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
        const { keyCode, which } = event;
        const code = keyCode || which;


        if (TargetKeyCode.includes(code) && document.activeElement === this.panel.current) {
            event.preventDefault();
            this.props.onChange();
        }
    };

    panel: RefObject<HTMLDivElement> = createRef();

    render() {
        const { actionIcon, children, className, onChange, opened, openingByIcon } = this.props;
        const summaryTabIndex = openingByIcon ? -1 : 0;

        return (
            <div
                className={className}
                onClick={openingByIcon ? () => false : onChange}
                onKeyPress={this.handleKeyPress}
                tabIndex={summaryTabIndex}
                ref={this.panel}
                role="button"
            >
                {openingByIcon &&
                    <div className={cn('Drop-down-panel__summary-icon')}>
                        <Button.Icon iconName={opened ? ANGLE_UP : ANGLE_DOWN} onClick={onChange}/>
                    </div>
                }
                <div className={cn('Drop-down-panel__summary-content')}>
                    {children}
                </div>
                {actionIcon &&
                    <div className={cn('Drop-down-panel__summary-action')}>
                        <Button.Icon iconName={actionIcon.iconName} onClick={this.handleActionClick}/>
                    </div>
                }
            </div>
        );
    }
}
