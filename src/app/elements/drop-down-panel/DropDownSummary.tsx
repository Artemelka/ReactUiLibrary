import React, { Component, KeyboardEvent, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../icon';
import { Button } from '..';
import { keyCodes } from '../../../services';
import { DropDownPanelProps } from './DropDownPanel';

const style = require('./DropDownPanel.less');
const cn = classNames.bind(style);
const { ANGLE } = IconModule.IconNames;
const { ENTER, SPACE } = keyCodes;
const TargetKeyCode = [ENTER, SPACE];

interface Props {
    actionIcon?: {
        iconName: string;
        onClick: () => void;
    };
    darkColor?: boolean;
    emptyStyle?: boolean;
    onChange?: () => void;
    onlyBorder?: boolean;
    opened?: boolean;
    openingByIcon?: boolean;
}

export class DropDownSummary extends Component<Props> {
    handleActionClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        this.props.actionIcon.onClick();
    };

    handleClick = () => {
        const { onChange, openingByIcon} = this.props;

        if (!openingByIcon) {
            onChange();
        }
    };

    handleKeyPress = (event: KeyboardEvent<HTMLElement>) => {
        const { keyCode, which } = event;
        const code = keyCode || which;

        if (TargetKeyCode.includes(code)) {
            this.handleClick();
        }
    };

    render() {
        const { actionIcon, children, darkColor, emptyStyle,  onChange,  onlyBorder, opened, openingByIcon } = this.props;
        const iconName = opened ? ANGLE.UP : ANGLE.DOWN;
        const summaryTabIndex = openingByIcon ? -1 : 0;
        const styleName = cn('Drop-down-panel__summary', {
            'Drop-down-panel__summary--clickable': !openingByIcon,
            'Drop-down-panel__summary--empty': emptyStyle,
            'Drop-down-panel__summary--only-border': onlyBorder,
            'Drop-down-panel__summary--dark': darkColor
        });

        return (
            <div
                className={styleName}
                onClick={this.handleClick}
                onKeyPress={this.handleKeyPress}
                tabIndex={summaryTabIndex}
            >
                {openingByIcon &&
                    <div className={cn('Drop-down-panel__summary-icon')}>
                        <Button.Icon iconName={iconName} onClick={onChange}/>
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
