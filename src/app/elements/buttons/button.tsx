import React, { Component, MouseEvent, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { keyCodes } from '../../../services';
import './button.less';

export interface ButtonProps {
    disabled?: boolean;
    onClick?: (event: React.SyntheticEvent) => void;
    type?: string;
}
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];

export class Button extends Component<ButtonProps> {
    static defaultProps = {
        onClick: () => {},
        type: 'button'
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

    render() {
        const { children, disabled, type } = this.props;
        const buttonClasses = classNames('Button', {
            'Button--disabled': disabled
        });

        return (
            <button
                className={buttonClasses}
                disabled={disabled}
                onClick={this.handleClick}
                onKeyPress={this.handleKeyPress}
                type={type}
            >
                {children}
            </button>
        );
    }
}
