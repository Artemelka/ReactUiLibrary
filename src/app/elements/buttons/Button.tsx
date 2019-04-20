import React, { Component, MouseEvent, KeyboardEvent } from 'react';
import classNames from 'classnames/bind';
import { ButtonIcon } from './ButtonIcon';
import { ButtonIconLabel } from './ButtonIconLabel';
import { keyCodes } from '../../../services';

const style = require('./Button.less');
const cn = classNames.bind(style);

const ButtonSize = {
    SMALL: 'small',
    BIG: 'big'
};
export interface ButtonNotRequiredProps {
    disabled?: boolean;
    icon?: boolean;
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
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];

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

    handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        const { disabled, onClick} = this.props;

        if (!disabled) {
            onClick(event);
        }
    };

    handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>) => {
        const {keyCode} = event;

        if (targetKeyCodes.includes(keyCode)) {
            this.props.onClick(event);
        }
    };

    handleKeyDownOrUp = (isActive: boolean) => (event: KeyboardEvent<HTMLButtonElement>) => {
        const {keyCode} = event;

        if (targetKeyCodes.includes(keyCode)) {
            this.setState(() => ({isActive}));
        }
    };

    render() {
        const { isActive } = this.state;
        const { children, disabled, icon, label, roundLeft, roundRight, size, type } = this.props;
        const buttonClasses = cn('Button', {
            'Button--active': isActive,
            'Button--disabled': disabled,
            'Button--icon': icon,
            'Button--round-left': roundLeft,
            'Button--round-right': roundRight,
            'Button--small': size === ButtonSize.SMALL,
            'Button--big': size === ButtonSize.BIG,
        });

        return (
            <button
                className={buttonClasses}
                disabled={disabled}
                onClick={this.handleClick}
                onKeyDown={this.handleKeyDownOrUp(true)}
                onKeyPress={this.handleKeyPress}
                onKeyUp={this.handleKeyDownOrUp(false)}
                type={type}
            >
                <span className={cn('Button__content')}>
                    {icon ? children : label}
                </span>
            </button>
        );
    }
}
