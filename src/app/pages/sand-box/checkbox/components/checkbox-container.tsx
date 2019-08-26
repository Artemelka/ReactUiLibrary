import React, { Component, Fragment } from 'react';
import { Checkbox } from '../../../../elements/inputs';
import { CheckboxProps } from '../../../../elements/inputs/checkbox/Checkbox';

interface State {
    checked: boolean;
}

const ignoreKey = ['checked', 'onChange'];

export class CheckboxContainer extends Component<CheckboxProps, State> {
    static defaultProps = {
        checked: false
    };

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
        const { checked } = this.state;
        return (
            <Fragment>
                <Checkbox
                    {...this.props}
                    onChange={this.handleChange}
                    checked={checked}
                />
                {!this.props.disabled && <p> value: {`${checked}`}</p>}
            </Fragment>
        );
    }
}
