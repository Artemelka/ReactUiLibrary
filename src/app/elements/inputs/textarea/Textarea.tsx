import React, { Component, createRef, KeyboardEvent, MouseEvent, RefObject, SyntheticEvent } from 'react';
import { TextareaUI } from './Textarea-UI';
import { TextareaContainerProps } from './types';

export class Textarea extends Component<TextareaContainerProps> {
    static defaultProps = {
        maxlength: 255,
        onBlur: () => false,
        onChange: () => false,
        onClick: () => false,
        onFocus: () => false,
        onKeyDown: () => false,
        onKeyPress: () => false
    };

    handleBlur = (event: SyntheticEvent<HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        const { name, onBlur } = this.props;

        onBlur(event, value, name);
    };

    handleChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        const { maxlength, name, onChange } = this.props;

        if (value.length <= maxlength) {
            onChange(event, value, name);
        }
    };

    handleClick = (event: MouseEvent<HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        const { name, onClick } = this.props;

        onClick(event, value, name);
    };

    handleClearClick = () => {
        this.ref.current.focus();
        this.props.onChange(null, '', this.props.name);
    };

    handleFocus = (event: SyntheticEvent<HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        const { name, onFocus } = this.props;

        onFocus(event, value, name);
    };

    handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        const { name, onKeyDown } = this.props;

        onKeyDown(event, value, name);
    };

    handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        const { value } = event.currentTarget;
        const { name, onKeyPress } = this.props;

        onKeyPress(event, value, name);
    };

    ref: RefObject<HTMLTextAreaElement> = createRef();

    render() {
        const { error, errorMessage, id, value, ...restProps } = this.props;

        return (
            <TextareaUI
                {...restProps}
                error={error}
                errorMessage={errorMessage}
                id={id}
                name={id}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onClearClick={this.handleClearClick}
                onClick={this.handleClick}
                onFocus={this.handleFocus}
                onKeyDown={this.handleKeyDown}
                onKeyPress={this.handleKeyPress}
                onRef={this.ref}
                value={value}
            />
        );
    }
}
