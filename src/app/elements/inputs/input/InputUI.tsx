import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../buttons';
import { InputUiProps } from './types';
import style from './Input.less';

const cn = classNames.bind(style);

export class InputUi extends Component<InputUiProps> {
    render() {
        const {
            cursorPointer,
            disabled,
            defaultErrorMessage: omitDefaultErrorMessage,
            error,
            errorMessage,
            focused,
            iconProps,
            id,
            InputIconRef,
            inputRef,
            name,
            onBlur,
            onChange,
            onClick,
            onFocus,
            onKeyPress,
            value,
            width,
            withoutError,
            ...restProps
        } = this.props;
        const visibleIcon = Boolean(iconProps) && (!disabled || iconProps.alwaysVisible);

        return (
            <div
                className={cn('Input', {
                    'Input--focused': focused,
                    'Input--error': error,
                    'Input--without-error': withoutError
                })}
                style={width ? {width: `${width}px`} : {}}
            >
                <input
                    {...restProps}
                    className={cn('Input__element', {
                        'Input__element--cursor-pointer': cursorPointer,
                        'Input__element--disabled': disabled
                    })}
                    disabled={disabled}
                    id={id}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    onClick={onClick}
                    onFocus={onFocus}
                    onKeyPress={onKeyPress}
                    ref={inputRef}
                    value={value}
                />
                {visibleIcon &&
                    <div
                        className={cn('Input__clear-button', {
                            'Input__clear-button--always-visible': iconProps.alwaysVisible
                        })}
                    >
                        <Button.Icon
                            disabled={disabled}
                            iconName={iconProps.name}
                            onClick={iconProps.onClick}
                            buttonRef={InputIconRef}
                        />
                    </div>
                }
                {error && <div className={cn('Input__error-container')}>{errorMessage}</div>}
            </div>
        );
    }
}
