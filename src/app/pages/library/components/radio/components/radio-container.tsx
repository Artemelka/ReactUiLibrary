import React, { Component } from 'react';
import { RadioButtons } from '../../../../../elements';
import { RadioButtonsProps } from '../../../../../elements/inputs/radio/types';
import { RadioButtonsContainerState } from './types';

export class RadioButtonsContainer extends Component<RadioButtonsProps, RadioButtonsContainerState> {
    constructor(props: RadioButtonsProps) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    handleChange = (value: string) => {
        this.setState({value});
        this.props.onChange(value);
    };

    render() {
        const { column, items, name } = this.props;

        return (
            <RadioButtons
                column={column}
                items={items}
                value={this.state.value}
                name={name}
                onChange={this.handleChange}
            />
        );
    }
}
