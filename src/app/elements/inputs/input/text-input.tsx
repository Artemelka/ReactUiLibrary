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

    constructor(props: InputProps) {
        super(props);

        this.state = {
            value: props.value || ''
        };
    }

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
        const { value: stateValue } = this.state;
        const { icon, onChange, value, ...restProps } = this.props;
        const iconProps = {
            name: IconModule.IconNames.BACKSPACE,
            onClick: this.handleClearClick
        };

        return (
            <Input
                icon={stateValue && iconProps}
                inputRef={this.input}
                value={stateValue}
                onChange={this.handleChange}
                {...restProps}
            />
        );
    }
}
