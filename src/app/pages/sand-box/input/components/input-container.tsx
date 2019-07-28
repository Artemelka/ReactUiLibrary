import React, { Component, Fragment, SyntheticEvent } from 'react';
import { Input } from '../../../../elements';
import { InputProps } from '../../../../elements/inputs/input/Input';

interface State {
    counter: number;
    value: string;
}
export class TextInputContainer extends Component<InputProps, State> {
    static defaultProps = {
        value: ''
    };

    state = {
        counter: 0,
        value: this.props.value
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
