import React, { Component, Fragment, SyntheticEvent } from 'react';
import { SandBox } from '../sand-box';
import { Input } from '../../../elements';
import { InputProps } from '../../../elements/inputs/input/Input';

const inputProps = [
    {
        id: 'test1',
        label: 'Input.Text',
        name: 'test1',
        onChange: (event: SyntheticEvent<HTMLInputElement>, value: string) => {
            console.log('input value', value);
        }
    }, {
        id: 'test2',
        label: 'Input.Text disabled',
        name: 'test2',
        disabled: true
    }, {
        id: 'test2',
        label: 'Input.Text with default value',
        name: 'test2',
        value: 'defaultValue'
    }
];

interface State {
    counter: number;
    value: string;
}
class TextInputExample extends Component<InputProps, State> {
    state = {
        counter: 0,
        value: this.props.value || ''
    };

    handleChange = (event: SyntheticEvent<HTMLInputElement>, value: string) => {
        const { onChange = () => false } = this.props;

        this.setState({value});
        onChange(event, value);
    };

    handleClick = () => {
        const { counter, value } = this.state;
        const nextCounter = counter + 1;
        const nextValue = `${value}_${nextCounter}`;
        this.setState({
            counter: nextCounter,
            value: nextValue
        });
    };

    render() {
        const { value, onChange, ...restProps} = this.props;

        return (
            <Fragment>
                <Input.Text {...restProps} onChange={this.handleChange} value={this.state.value} />
                <button onClick={this.handleClick}>change value</button>
            </Fragment>
        );
    }
}
const sandBoxItems = inputProps.map(props => {
    const { label, ...restProps} = props;

    return (
        <Fragment key={props.id}>
            <h3>{label}</h3>
            <TextInputExample {...restProps} />
        </Fragment>
    );
});

export const InputSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
