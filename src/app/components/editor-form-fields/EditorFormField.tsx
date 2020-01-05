import React, { Component, SyntheticEvent } from 'react';
import { TextArea, TextInput } from '../inputs';

interface EditorFormFieldProps {
    id: string;
    index: number;
    name: string;
    onBlur: (name: string) => void;
    onChange: (value: string, name: string) => void;
    onFocus: (name: string) => void;
    value: string;
}

export class EditorFormField extends Component<EditorFormFieldProps> {
    handleChange = (event: SyntheticEvent, value: string) => {
        this.props.onChange(value, this.props.name);
    };

    render() {
        const { index, onChange: omitOnChange,  ...restProps } = this.props;

        return (index === 0
            ? <TextInput {...restProps} onChange={this.handleChange} required/>
            : <TextArea {...restProps} onChange={this.handleChange} rows={4}/>
        );
    }
}
