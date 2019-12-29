import React, { Component, Fragment, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Input } from '../../../../../elements';
import { localizationLabelsSelector } from '../../../../../../services/localization';
import { LocalizationState } from '../../../../../../services/localization/types';
import { InputProps } from '../../../../../elements/inputs/input/types';

type Props = InputProps & { labels: Record<string, string>};
type State = { counter: number, value: string };

export class TextInputContainerComponent extends Component<Props, State> {
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
        const { value: omitValue, onChange: omitOnChange, labels, ...restProps} = this.props;

        return (
            <Fragment>
                <Input.Text {...restProps} onChange={this.handleChange} value={this.state.value} />
                <button onClick={this.handleClick}>
                    {labels['change-value']}
                </button>
            </Fragment>
        );
    }
}

export const TextInputContainer = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}))(TextInputContainerComponent);
