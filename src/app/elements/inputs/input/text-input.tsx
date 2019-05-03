import React, { Component, createRef, RefObject, SyntheticEvent } from 'react';
import { Input, InputProps } from './Input';
import { IconModule } from '../../index';

interface TextInputProps extends InputProps {
    onRef?: (ref: HTMLInputElement) => void;
}

export class TextInput extends Component<TextInputProps> {
    static defaultProps = {
        onRef: () => false,
        onChange: () => false
    };

    handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;

        this.props.onChange(event, value);
    };

    handleClearClick = () => {
        this.props.onChange(null, '');
        this.input.current.focus();
    };

    handleRef = () => {
        this.props.onRef(this.input.current);

        return this.input;
    };

    input: RefObject<HTMLInputElement> = createRef();

    render() {
        const { icon, onChange, onRef, value, ...restProps } = this.props;
        const iconProps = {
            name: IconModule.IconNames.BACKSPACE,
            onClick: this.handleClearClick
        };

        return (
            <Input
                icon={value && iconProps}
                inputRef={this.handleRef()}
                value={value}
                onChange={this.handleChange}
                {...restProps}
            />
        );
    }
}
