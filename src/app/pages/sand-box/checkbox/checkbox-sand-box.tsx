import React, { Component, createRef, Fragment } from 'react';
import { SandBox } from '../sand-box';
import { Checkbox } from '../../../elements/inputs';
import { CheckboxProps } from '../../../elements/inputs/checkbox/checkbox';
import { logger } from '../utils';

interface Props extends CheckboxProps {
    heading: string;
}
interface State {
    checked: boolean;
}

const checkboxProps: Array<Props> = [
    {
        disabled: true,
        checked: true,
        id: 'test1',
        heading: 'Checkbox disabled',
        name: 'test1',
        onChange: logger('checkbox Click disabled')
    }, {
        onChange: logger('checkbox Click'),
        id: 'test2',
        heading: 'Checkbox',
        name: 'test2',
        checked: false
    }, {
        heading: 'Checkbox without prop checked',
        id: 'test3',
        name: 'test3',
        onChange: logger('checkbox without prop checked Click')
    },
];
const checkboxToggleProps: Array<Props> = checkboxProps.map((props) => ({
    ...props,
    heading: props.heading.replace('Checkbox', 'Checkbox.Toggle')
}));

class CheckboxExample extends Component<Props, State> {
    state = {
        checked: this.props.checked
    };

    setFocus = () => {
        this.checkbox.focus();
    };

    checkbox: HTMLInputElement;

    handleChange = () => {
        this.setState(({checked}) => ({checked: !checked}));
        this.props.onChange();
    };

    handleRef = (ref: HTMLInputElement) => this.checkbox = ref;

    render() {
        const { checked, disabled, heading, onChange, ...restProps} = this.props;

        return (
            <Fragment>
                <h3>{heading}</h3>
                <Checkbox
                    {...restProps}
                    disabled={disabled}
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    withRef={this.handleRef}
                />
                <br />
                <br />
                {!disabled && <button onClick={this.setFocus}>focus</button>}
            </Fragment>
        );
    }
}

const CheckboxItems = checkboxProps.map((props: Props, index: number) =>
    <CheckboxExample {...props} key={index}/>
);
const CheckboxToggleItems = checkboxToggleProps.map((props: Props, index: number) =>
    <CheckboxExample {...props} key={index} toggle/>
);
const sandBoxItems = [...CheckboxItems, ...CheckboxToggleItems];

export const CheckboxSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
