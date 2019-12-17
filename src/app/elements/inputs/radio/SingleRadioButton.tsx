import React, { Component } from 'react';
import { Checkbox } from '../checkbox';
import { SingleRadioButtonProps } from './types';

export class SingleRadioButton extends Component<SingleRadioButtonProps> {
    handleChange = () => {
        const { onChange, value } = this.props;

        onChange(value);
    };

    render() {
        return (
            <Checkbox
                {...this.props}
                indeterminate
                onChange={this.handleChange}
                radio
            />
        );
    }
}
