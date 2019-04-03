import React, { Component, MouseEvent, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { keyCodes } from '../../../services';
import './button.less';

export interface ButtonProps {
    children: React.ComponentType | string;
    disabled?: boolean;
    onClick?: (event: React.SyntheticEvent) => void;
    roundLeft?: boolean;
    roundRight?: boolean;
    type?: string;
}
interface State {
    isActive: boolean;
}
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];

export class Button extends Component<ButtonProps, State> {
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
        const { children, disabled, roundLeft, roundRight, type } = this.props;
        const buttonClasses = classNames('Button', {
            'Button--active': isActive,
            'Button--disabled': disabled,
            'Button--round-left': roundLeft,
            'Button--round-right': roundRight
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
                <span className={classNames('Button__content')}>
                    {children}
                </span>
            </button>
        );
    }
}
