import React, { Component, createRef, RefObject, SyntheticEvent } from 'react';
import { Textarea, TranslateComponent } from '../../../../elements';
import { TextareaProps } from '../../../../elements/inputs/textarea/Textarea-UI';

type State = {
    error: boolean,
    errorMessage: string,
    value: string
};

export class TextareaContainer extends Component<TextareaProps, State> {
    state = {
        error: false,
        errorMessage: '',
        value: ''
    };

    setErrorState = () => {
        this.setState({
            error: true,
            errorMessage: 'not have empty'
        });
    };

    changeState = (value: string) =>
        this.setState((state) => ({
            error: state.error ? false : state.error,
            value
        }));

    handleChange = (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => {
        this.changeState(value);
        if (!value.length) {
            console.log('error');
            this.setErrorState();
        } else {
            // this.props.onChange(event, value);
            console.log('onChange');
        }
    };

    render() {
        const { id, ...restProps } = this.props;
        const { error, errorMessage, value } = this.state;

        return (
            <Textarea
                {...restProps}
                error={error}
                errorMessage={errorMessage}
                id={id}
                name={id}
                onChange={this.handleChange}
                translateComponent={TranslateComponent}
                value={value}
            />
        );
    }
}
