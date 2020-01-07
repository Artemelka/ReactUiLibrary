import React, { Component, KeyboardEvent, SyntheticEvent } from 'react';
import { InputUi } from './InputUI';
import { keyCodes } from '../../../constants';
import { InputProps, InputState } from './types';

export class Input extends Component<InputProps, InputState> {
    static defaultProps = {
        onBlur: () => false,
        onChange: () => false,
        onClick: () => false,
        onFocus: () => false,
        onKeyPress: () => false
    };

    state = { focused: false };

    handleBlur = (event: SyntheticEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        const { name, onBlur } = this.props;

        this.setState({focused: false});
        onBlur(event, value, name);
    };

    handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        const { name, onChange } = this.props;

        onChange(event, value, name);
    };

    handleClick = (event: SyntheticEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        const { name, onClick } = this.props;

        onClick(event, value, name);
    };

    handleFocus = (event: SyntheticEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        const { name, onFocus } = this.props;

        this.setState({focused: true});
        onFocus(event, value, name);
    };

    handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        const { currentTarget, keyCode, which } = event;
        const { name, onClick, onKeyPress } = this.props;
        const { ENTER } = keyCodes;
        const actionMethod = (keyCode === ENTER || which === ENTER) ? onClick : onKeyPress;

        actionMethod(event, currentTarget.value, name);
    };

    render() {
        const { focused } = this.state;
        const {
            defaultValue: omitValue,
            icon,
            inputRef,
            name,
            onBlur: omitOnBlur,
            onChange: omitOnChange,
            onClick: omitOnClick,
            onFocus: omitOnFocus,
            required: omitRequired,
            value,
            ...restProps
        } = this.props;


        return (
            <InputUi
                {...restProps}
                focused={focused}
                iconProps={icon}
                inputRef={inputRef}
                name={name}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onClick={this.handleClick}
                onFocus={this.handleFocus}
                onKeyPress={this.handleKeyPress}
                value={value}
            />
        );
    }
}
