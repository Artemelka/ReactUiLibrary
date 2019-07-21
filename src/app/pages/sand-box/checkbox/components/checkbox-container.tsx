import React, { Component, Fragment } from 'react';
import { Checkbox } from '../../../../elements/inputs';
import { CheckboxProps } from '../../../../elements/inputs/checkbox/Checkbox';

interface State {
    checked: boolean;
}

export class CheckboxContainer extends Component<CheckboxProps, State> {
    state = {
        checked: this.props.checked
    };

    handleChange = () => {
        this.setState(({checked}) => ({checked: !checked}));
        this.props.onChange();
    };

    render() {
        const { checked, disabled, onChange, ...restProps} = this.props;

        return (
            <Checkbox
                {...restProps}
                disabled={disabled}
                onChange={this.handleChange}
                checked={this.state.checked}
            />
        );
    }
}
