import React, { Component, MouseEvent, KeyboardEvent } from 'react';
import classNames from 'classnames';
import { keyCodes } from '../../../services';
import './button.less';

interface Props {
    disabled?: boolean;
    label: string;
    onClick?: (event: React.SyntheticEvent) => void;
    type?: string;
}
const {ENTER, SPACE} = keyCodes;
const targetKeyCodes = [ENTER, SPACE];

export class Button extends Component<Props> {
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
        const { disabled, label, type } = this.props;
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
                {label}
            </button>
        );
    }
}
