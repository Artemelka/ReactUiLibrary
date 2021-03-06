import React, { Component, MouseEvent, KeyboardEvent } from 'react';
import classNames from 'classnames/bind';
import { ButtonIcon } from './ButtonIcon';
import { ButtonIconLabel } from './ButtonIconLabel';
import { keyCodes } from '../../constants';
import { ButtonSize } from './constants';
import { ButtonState, ButtonProps } from './types';
import style from './Button.less';

const cn = classNames.bind(style);
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];

export class Button extends Component<ButtonProps, ButtonState> {
    static Icon = ButtonIcon;
    static IconLabel = ButtonIconLabel;
    static defaultProps = {
        onClick: () => false,
        type: 'button'
    };

    state = {
        isActive: false
    };

    changeActive = (isActive: boolean, keyCode: number) => {
        if (targetKeyCodes.includes(keyCode)) {
            this.setState(() => ({ isActive }));
        }
    };

    handleBlur = () => this.setState({isActive: false});

    handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { disabled, onClick } = this.props;

        if (!disabled) {
            onClick(event);
        }
    };

    handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (targetKeyCodes.includes(event.keyCode)) {
            this.props.onClick(event);
        }
    };

    handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => this.changeActive(true, event.keyCode);

    handleKeyUp = (event: KeyboardEvent<HTMLButtonElement>) => this.changeActive(false, event.keyCode);

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
            'Button--big': size === ButtonSize.BIG
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
