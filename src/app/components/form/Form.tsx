import React, { Component, SyntheticEvent } from 'react';
import { createForm, FormState, FormApi, FieldState } from 'final-form';
import { FormProps, State } from './types';

export class Form extends Component<FormProps, State> {
    constructor(props: FormProps) {
        super(props);

        const initialState: State = {};
        const formSubscriber = (formState: FormState<Record<string, string>>) => {
            if (inConstructor) {
                initialState.formState = formState;
            } else {
                this.setState({ formState });
            }
        };
        let inConstructor = true;

        this.form = createForm(props.formConfig);
        this.unsubscribe = this.form.subscribe(formSubscriber, props.subscription.form);
        this.unsubscribeFields = props.fieldsName.map((fieldName: string) => {
            const fieldSubscriber = (fieldState: FieldState<Record<string, string>>) => {
                if (inConstructor) {
                    initialState[fieldName] = fieldState;
                } else {
                    this.setState({ [fieldName]: fieldState });
                }
            };

            return this.form.registerField(fieldName, fieldSubscriber, props.subscription.fields);
        });

        this.state = initialState;
        inConstructor = false;
    }

    form: FormApi;
    unsubscribe: () => void;
    unsubscribeFields: Array<() => void>;

    componentWillUnmount() {
        this.unsubscribe();
        this.unsubscribeFields.forEach(unsubscribe => unsubscribe());
    }

    handleBlur = (event: SyntheticEvent, name: string) => this.state[name].blur();

    handleChange = (event: SyntheticEvent, value: string, name: string) => this.state[name].change(value);

    handleClearClick = () => this.form.reset();

    handleFocus = (event: SyntheticEvent, name: string) => this.state[name].focus();

    handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.form.submit();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.children({
                    handleBlur: this.handleBlur,
                    handleChange: this.handleChange,
                    handleClearClick: this.handleClearClick,
                    handleFocus: this.handleFocus,
                    state: this.state
                })}
            </form>
        );
    }
}
