import React, { Component, createRef, RefObject, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { Button } from '../../index';

const style = require('./Input.less');
const cn = classNames.bind(style);

type IconProps = {
    alwaysVisible?: boolean;
    name: string;
    onClick: () => void;
};
export interface InputProps {
    defaultValue?: string;
    disabled?: boolean;
    icon?: IconProps;
    id?: string;
    inputRef?: RefObject<HTMLInputElement>;
    name?: string;
    onBlur?: (event: SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (event: SyntheticEvent<HTMLInputElement>, value?: string) => void;
    onFocus?: (event: SyntheticEvent<HTMLInputElement>) => void;
    value?: string;
}
interface State {
    focused: boolean;
}

export class Input extends Component<InputProps, State> {
    static defaultProps = {
        onBlur: () => false,
        onFocus: () => false
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

    render() {
        const { focused } = this.state;
        const {
            defaultValue,
            disabled,
            icon,
            id,
            inputRef,
            name,
            onBlur,
            onChange,
            onFocus,
            value,
            ...restProps
        } = this.props;
        const visibleIcon = Boolean(icon) && (!disabled || icon.alwaysVisible);

        return (
            <div className={cn('Input', {'Input--focused': focused})}>
                <input
                    {...restProps}
                    className={cn('Input__element', {'Input__element--disabled': disabled})}
                    disabled={disabled}
                    onBlur={this.handleBlur}
                    onChange={onChange}
                    onFocus={this.handleFocus}
                    value={value}
                    ref={inputRef}
                    name={name}
                    id={id}
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
                        />
                    </div>
                }
            </div>
        );
    }
}
