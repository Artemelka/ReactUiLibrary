import React, { Component } from 'react';
import { Checkbox } from '../../../../elements/inputs';
import { CheckboxProps } from '../../../../elements/inputs/checkbox/Checkbox';

interface State {
    checked: boolean;
}

const ignoreKey = ['checked', 'onChange'];

export class CheckboxContainer extends Component<CheckboxProps, State> {
    constructor(props: CheckboxProps) {
        super(props);

        this.state = {
            checked: props.checked
        };
    }

    handleChange = () => {
        this.setState(({checked}) => ({checked: !checked}));
        this.props.onChange();
    };

    render() {
        return (
            <Checkbox
                {...this.props}
                onChange={this.handleChange}
                checked={this.state.checked}
            />
        );
    }
}
