import React, { Component, KeyboardEvent, MouseEvent, RefObject, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../index';
import { keyCodes } from '../../../../services';

const style = require('./Input.less');
const cn = classNames.bind(style);

type IconProps = {
    alwaysVisible?: boolean;
    name: string;
    onClick: () => void;
};
export interface InputProps {
    cursorPointer?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    icon?: IconProps;
    id: string;
    InputIconRef?: RefObject<HTMLButtonElement>;
    inputRef?: RefObject<HTMLInputElement>;
    name?: string;
    onBlur?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (event: SyntheticEvent<HTMLInputElement>, value?: string) => void;
    onClick?: (event: MouseEvent<HTMLInputElement> | KeyboardEvent) => void;
    onFocus?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onKeyPress?: (event: KeyboardEvent) => void;
    readOnly?: boolean;
    value?: string;
    width?: number;
}
interface State {
    focused: boolean;
}

export class Input extends Component<InputProps, State> {
    static defaultProps = {
        onBlur: () => false,
        onClick: () => false,
        onFocus: () => false,
        onKeyPress: () => false
    };

    state = {
        focused: false
    };

    handleBlur = (event: SyntheticEvent<HTMLInputElement>) => {
        this.setState({focused: false});
        this.props.onBlur(event);
    };

    handleFocus = (event: SyntheticEvent<HTMLInputElement>) => {
        this.setState({focused: true});
        this.props.onFocus(event);
    };

    handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        const { keyCode, which } = event;
        const { onClick, onKeyPress } = this.props;
        const { ENTER } = keyCodes;

        if (keyCode === ENTER || which === ENTER) {
            onClick(event);
            return;
        }

        onKeyPress(event);
    };

    render() {
        const { focused } = this.state;
        const {
            cursorPointer,
            defaultValue,
            disabled,
            icon,
            id,
            InputIconRef,
            inputRef,
            name,
            onBlur,
            onChange,
            onClick,
            onFocus,
            value,
            width,
            ...restProps
        } = this.props;
        const visibleIcon = Boolean(icon) && (!disabled || icon.alwaysVisible);

        return (
            <div className={cn('Input', {'Input--focused': focused})}>
                <input
                    {...restProps}
                    className={cn('Input__element', {
                        'Input__element--cursor-pointer': cursorPointer,
                        'Input__element--disabled': disabled
                    })}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onBlur={this.handleBlur}
                    onChange={onChange}
                    onClick={onClick}
                    onFocus={this.handleFocus}
                    onKeyPress={this.handleKeyPress}
                    ref={inputRef}
                    value={value}
                    style={{width: `${width}px`}}
                />
                {visibleIcon &&
                    <div
                        className={cn('Input__clear-button', {
                            'Input__clear-button--always-visible': icon.alwaysVisible
                        })}
                    >
                        <Button.Icon
                            disabled={disabled}
                            iconName={icon.name}
                            onClick={icon.onClick}
                            buttonRef={InputIconRef}
                        />
                    </div>
                }
            </div>
        );
    }
}
