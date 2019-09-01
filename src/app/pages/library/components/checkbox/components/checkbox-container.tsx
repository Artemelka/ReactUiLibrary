import React, { Component, Fragment } from 'react';
import { Checkbox } from '../../../../../elements/inputs';
import { CheckboxProps } from '../../../../../elements/inputs/checkbox/types';

export class CheckboxContainer extends Component<CheckboxProps, { checked: boolean; }> {
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
        const { checked: omitChecked, onChange: omitOnChange, disabled, ...restProps } = this.props;

        return (
            <Fragment>
                <Checkbox
                    {...restProps}
                    checked={checked}
                    disabled={disabled}
                    onChange={this.handleChange}
                />
                {!disabled && <p> value: {`${checked}`}</p>}
            </Fragment>
        );
    }
}
