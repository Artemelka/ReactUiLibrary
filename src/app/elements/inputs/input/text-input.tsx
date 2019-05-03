import React, { Component, createRef, RefObject, SyntheticEvent } from 'react';
import { Input, InputProps } from './Input';
import { IconModule } from '../../index';

interface State {
    value: string;
}

export class TextInput extends Component<InputProps, State> {
    static defaultProps = {
        onChange: () => false
    };

    static getDerivedStateFromProps(nextProps: InputProps, prevState: State) {
        return nextProps.value !== prevState.value ? {value: nextProps.value} : null;
    }

    state = {
        value: this.props.defaultValue || ''
    };

    handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;

        this.setState({value});
        this.props.onChange(event, value);
    };

    handleClearClick = () => {
        this.setState({value: ''});
        this.props.onChange(null, '');
        this.input.current.focus();
    };

    input: RefObject<HTMLInputElement> = createRef();

    render() {
        const { value } = this.state;
        const { icon, onChange, value: val, ...restProps } = this.props;
        const iconProps = {
            name: IconModule.IconNames.BACKSPACE,
            onClick: this.handleClearClick
        };

        return (
            <Input
                icon={value && iconProps}
                inputRef={this.input}
                value={value}
                onChange={this.handleChange}
                {...restProps}
            />
        );
    }
}
