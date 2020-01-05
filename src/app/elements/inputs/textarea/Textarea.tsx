import React, { Component, createRef, RefObject, SyntheticEvent } from 'react';
import { TextareaUI } from './Textarea-UI';
import { TextareaContainerProps, TextareaContainerState, ErrorParams } from './types';

const TEXTAREA_MAX_LENGTH = 255;

export class Textarea extends Component<TextareaContainerProps, TextareaContainerState> {
    static defaultProps = {
        maxlength: TEXTAREA_MAX_LENGTH
    };

    constructor(props: TextareaContainerProps) {
        super(props);

        this.state = {
            error: false,
            errorMessage: ''
        };

        this.errorParams = {
            error: true,
            errorMessage: this.props.defaultErrorMessage
        };
    }

    errorParams: ErrorParams;

    setErrorState = (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => {
        this.setState(this.errorParams);
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
