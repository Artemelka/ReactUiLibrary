import React, { Component, createRef, RefObject, SyntheticEvent } from 'react';
import { TextareaUI, TextareaProps } from './Textarea-UI';

const TEXTAREA_MAX_LENGTH = 255;
const ERROR_MESSAGE = 'max length';
const errorParams = {
    error: true,
    errorMessage: ERROR_MESSAGE
};

type State = {
    error: boolean,
    errorMessage: string
};

export class Textarea extends Component<TextareaProps, State> {
    static defaultProps = {
        maxlength: TEXTAREA_MAX_LENGTH
    };

    state = {
        error: false,
        errorMessage: ''
    };

    setErrorState = (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => {
        this.setState(errorParams);
        this.props.onChange(event, value.slice(0, this.props.maxlength));
    };

    changeState = (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => {
        this.setState((state) => ({error: state.error ? false : state.error}));
        this.props.onChange(event, value);
    };

    handleChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        const { maxlength } = this.props;

        if (value.length <= maxlength) {
            this.changeState(event, value);
        }

        if (value.length > maxlength) {
            this.setErrorState(event, value);
        }
    };

    handleClearClick = () => {
        this.ref.current.focus();
        this.setState({error: false});
        this.props.onChange(null, '');
    };

    ref: RefObject<HTMLTextAreaElement> = createRef();

    render() {
        const { error, errorMessage, id, value, ...restProps } = this.props;
        const { error: innerError, errorMessage: innerMessage } = this.state;

        return (
            <TextareaUI
                {...restProps}
                error={error || innerError}
                errorMessage={errorMessage || innerMessage}
                id={id}
                name={id}
                onChange={this.handleChange}
                onClearClick={this.handleClearClick}
                onRef={this.ref}
                value={value}
            />
        );
    }
}
