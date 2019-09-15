import React, { Component, KeyboardEvent, SyntheticEvent } from 'react';
import { InputUi } from './InputUI';
import { keyCodes } from '../../../../services';
import { InputProps, InputState } from './types';

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
            defaultValue: omitValue,
            icon,
            name,
            onBlur: omitOnBlur,
            onChange,
            onClick,
            onFocus: omitOnFocus,
            value,
            ...restProps
        } = this.props;


        return (
            <InputUi
                {...restProps}
                focused={focused}
                iconProps={icon}
                name={name}
                onBlur={this.handleBlur}
                onChange={onChange}
                onClick={onClick}
                onFocus={this.handleFocus}
                onKeyPress={this.handleKeyPress}
                value={value}
            />
        );
    }
}
