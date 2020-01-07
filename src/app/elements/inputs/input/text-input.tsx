import React, { Component, createRef, RefObject } from 'react';
import { Input } from './Input';
import { IconModule } from '../../icon';
import { IconProps, TextInputProps } from './types';

export class TextInput extends Component<TextInputProps> {
    static defaultProps = {
        onRef: () => false,
        onChange: () => false
    };

    handleClearClick = () => {
        this.props.onChange(null, '', this.props.name);
        this.input.current.focus();
    };

    handleRef = () => {
        this.props.onRef(this.input.current);

        return this.input;
    };

    input: RefObject<HTMLInputElement> = createRef();
    iconProps: IconProps = {
        name: IconModule.IconNames.BACKSPACE,
        onClick: this.handleClearClick
    };

    render() {
        const { icon: omitIcon, onRef: omitRef, value, ...restProps } = this.props;

        return (
            <Input
                {...restProps}
                {...(value ? { icon: this.iconProps } : {})}
                inputRef={this.handleRef()}
                value={value}
            />
        );
    }
}
