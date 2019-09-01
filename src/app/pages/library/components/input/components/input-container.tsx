import React, { Component, Fragment, SyntheticEvent } from 'react';
import { Input } from '../../../../../elements';
import { TranslateComponent } from '../../../../../../services/translate';
import { InputProps } from '../../../../../elements/inputs/input/types';

export class TextInputContainer extends Component<InputProps, { counter: number, value: string }> {
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
        const { value: omitValue, onChange: omitOnChange, ...restProps} = this.props;

        return (
            <Fragment>
                <Input.Text {...restProps} onChange={this.handleChange} value={this.state.value} />
                <button onClick={this.handleClick}>
                    <TranslateComponent translateKey="change-value"/>
                </button>
            </Fragment>
        );
    }
}
