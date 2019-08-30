import React, { Component, KeyboardEvent, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../buttons/Button';
import { keyCodes } from '../../../../services';
import { InputProps, InputState } from './types';

const style = require('./Input.less');
const cn = classNames.bind(style);

export class Input extends Component<InputProps, InputState> {
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
        const actionMethod = (keyCode === ENTER || which === ENTER) ? onClick : onKeyPress;

        actionMethod(event);
    };

    render() {
        const { focused } = this.state;
        const {
            cursorPointer,
            defaultValue: omitValue,
            disabled,
            icon,
            id,
            InputIconRef,
            inputRef,
            name,
            onBlur: omitOnBlur,
            onChange,
            onClick,
            onFocus: omitOnFocus,
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
