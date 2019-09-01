import React, { Component } from 'react';
import { Select } from '../../../../../elements';
import { SelectProps } from '../../../../../elements/inputs/select/types';

export class SelectContainer extends Component<SelectProps, { value: string }> {
    static defaultProps = {
        onChange: () => false
    };
    constructor(props: SelectProps) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    handleChange = (value: string) => {
        const { onChange } = this.props;

        this.setState({value});
        onChange(value);
    };

    render() {
        const { onChange: omitOnCange, value: omitValue, ...restProps } = this.props;

        return (
            <Select
                {...restProps}
                onChange={this.handleChange}
                value={this.state.value}
            />
        );
    }
}
