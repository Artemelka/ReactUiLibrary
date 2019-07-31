import React, { Component, createRef, KeyboardEvent, RefObject, SyntheticEvent } from 'react';
import { Textarea, TranslateComponent } from '../../../../elements';
import { TextareaProps } from '../../../../elements/inputs/textarea/Textarea';

export const TEXTAREA_MAX_LENGTH = 255;

type State = {
    error: boolean,
    errorMessage: string,
    value: string
};

export class TextareaContainer extends Component<TextareaProps, State> {
    static defaultProps = {
        maxlength: TEXTAREA_MAX_LENGTH,
        onBlur: () => false
    };

    state = {
        error: false,
        errorMessage: '',
        value: ''
    };

    setErrorState = (
        value: string,
        onChange: (value: string) => void
    ) => {
        const correctValue = value.slice(0, this.props.maxlength);

        this.setState({
            error: true,
            errorMessage: 'max length',
            value: correctValue
        });
        onChange(correctValue);
    };

    changeState = (value: string) =>
        this.setState((state) => ({
            error: state.error ? false : state.error,
            value
        })
    );

    handleBlur = (event: SyntheticEvent<HTMLTextAreaElement>) => {
        this.props.onBlur(event);
    };

    handleChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        const { maxlength, onChange } = this.props;

        if (value.length <= maxlength) {
            this.changeState(value);
            onChange(value);
        }

        if (value.length > maxlength) {
            this.setErrorState(value, onChange);
        }
    };

    handleClearClick = () => {
        this.ref.current.focus();
        this.setState({value: ''});
    };

    ref: RefObject<HTMLTextAreaElement> = createRef();

    render() {
        const { error, errorMessage, id, ...restProps } = this.props;
        const { error: innerError, errorMessage: innerMessage, value } = this.state;

        return (
            <Textarea
                {...restProps}
                error={error || innerError}
                errorMessage={errorMessage || innerMessage}
                id={id}
                maxlength={TEXTAREA_MAX_LENGTH}
                name={id}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onClearClick={this.handleClearClick}
                onRef={this.ref}
                translateComponent={TranslateComponent}
                value={value}
            />
        );
    }
}
