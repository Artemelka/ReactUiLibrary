import React, { Component, MouseEvent, KeyboardEvent, RefObject } from 'react';
import classNames from 'classnames/bind';
import { ButtonIcon } from './ButtonIcon';
import { ButtonIconLabel } from './ButtonIconLabel';
import { keyCodes } from '../../../services';

const style = require('./Button.less');
const cn = classNames.bind(style);
export const ButtonSize = {
    SMALL: 'small',
    BIG: 'big'
};
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];

export interface ButtonNotRequiredProps {
    accent?: boolean;
    buttonRef?: RefObject<HTMLButtonElement>;
    disabled?: boolean;
    icon?: boolean;
    iconLabel?: boolean;
    onClick?: (event: React.SyntheticEvent) => void;
    roundLeft?: boolean;
    roundRight?: boolean;
    size?: string;
    type?: string;
}
export interface ButtonProps extends ButtonNotRequiredProps {
    label: string;
}
interface State {
    isActive: boolean;
}

export class Button extends Component<ButtonProps, State> {
    static Icon = ButtonIcon;
    static IconLabel = ButtonIconLabel;
    static defaultProps = {
        onClick: () => false,
        type: 'button'
    };

    state = {
        isActive: false
    };

    handleBlur = () => this.setState({isActive: false});

    handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { disabled, onClick} = this.props;

        if (!disabled) {
            onClick(event);
        }
    };

    handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>) => {
        const { keyCode } = event;

        if (targetKeyCodes.includes(keyCode)) {
            this.props.onClick(event);
        }
    };

    handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (targetKeyCodes.includes(event.keyCode)) {
            this.setState(() => ({isActive: true}));
        }
    };

    handleKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (targetKeyCodes.includes(event.keyCode)) {
            this.setState(() => ({isActive: false}));
        }
    };

    render() {
        const { isActive } = this.state;
        const {
            accent, buttonRef, children, disabled, icon, iconLabel, label, roundLeft, roundRight, size, type
        } = this.props;
        const buttonClasses = cn('Button', {
            'Button--accent': accent,
            'Button--active': isActive,
            'Button--disabled': disabled,
            'Button--icon': icon,
            'Button--icon-label': iconLabel,
            'Button--round-left': roundLeft,
            'Button--round-right': roundRight,
            'Button--small': size === ButtonSize.SMALL,
            'Button--big': size === ButtonSize.BIG,
        });

        return (
            <button
                className={buttonClasses}
                disabled={disabled}
                onBlur={this.handleBlur}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDown}
                onKeyPress={this.handleKeyPress}
                onKeyUp={this.handleKeyUp}
                ref={buttonRef}
                type={type}
            >
                <span className={cn('Button__content')}>
                    {icon || iconLabel ? children : label}
                </span>
            </button>
        );
    }
}
