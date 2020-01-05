import React, { Component, ComponentType, SyntheticEvent } from 'react';
import { log } from 'util';

const ERROR_MESSAGE_KEY = 'input-error-no-empty';
const ERROR_DEFAULT_MESSAGE_KEY = 'input-error-max-length';

type State = {
    error: boolean,
    errorMessage: string,
    isPristine: boolean,
    value: string
};

export const InputValidationHoc = (WrappedComponent: ComponentType<any>) => {
    return class TextareaContainer extends Component<any, State> {
        static defaultProps = {
            onChange: () => false,
            onFocus: () => false
        };

        constructor(props: any) {
            super(props);

            this.state = {
                error: false,
                errorMessage: '',
                isPristine: true,
                value: props.value || ''
            };
        }

        setErrorState = () => this.setState({
            error: true,
            errorMessage: this.props.labels[ERROR_MESSAGE_KEY]
        });

        changeState = (value: string) => this.setState((state) => ({
            error: state.error ? false : state.error,
            errorMessage: '',
            isPristine: false,
            value
        }));

        handleBlur = () => {
            const { isPristine, value } = this.state;

            if (!(value.length || isPristine)) {
                this.setErrorState();
            }

            this.props.onBlur(this.props.name);
        };

        handleChange = (event: SyntheticEvent<HTMLTextAreaElement>, value: string) => {
            this.changeState(value);
            this.props.onChange(event, value);
        };

        handleFocus = () => {
            this.setState({ isPristine: false });
            this.props.onFocus(this.props.name);
        };

        render() {
            const { labels, onChange: omitOnChange, onFocus: omitOnFocus, value: omitValue, ...restProps } = this.props;
            const { error, errorMessage, value } = this.state;

            return (
                <WrappedComponent
                    {...restProps}
                    defaultErrorMessage={labels[ERROR_DEFAULT_MESSAGE_KEY]}
                    error={error}
                    errorMessage={errorMessage}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                    value={value}
                />
            );
        }
    };
};
