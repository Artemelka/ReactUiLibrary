import React, { Component, Fragment, SyntheticEvent } from 'react';
import { createForm, FormState, FormApi, FieldState } from 'final-form';
import { Button } from '../../elements';
import { EditorFormField } from '../editor-form-fields/EditorFormField';

const formSubscription = {
    active: true,
    pristine: true,
    submitting: true,
    values: true
};
const fieldSubscription = {
    value: true
};

interface EditorFormProps {
    editRowData: Array<Record<string, string>>;
    fieldLabels: Array<string>;
    onSubmit: (values: Record<string, string>) => void;
}
type EditorFormState = Record<string, any> & { formState?: FormState<Record<string, string>> };

export class EditorForm extends Component<EditorFormProps, EditorFormState> {
    constructor(props: EditorFormProps) {
        super(props);

        const initialValues = props.editRowData.reduce((acc, item) => ({ ...acc, ...item}), {});
        const initialState: EditorFormState = {};
        let inConstructor = true;
        const formSubscriber = (formState: FormState<Record<string, string>>) => {
            if (inConstructor) {
                initialState.formState = formState;
            } else {
                this.setState({ formState });
            }
        };

        this.form = createForm({ initialValues, onSubmit: props.onSubmit });
        this.unsubscribe = this.form.subscribe(formSubscriber, formSubscription);
        this.unsubscribeFields = props.fieldLabels.map(fieldName => {
            const formSubscriber = (fieldState: FieldState<string>) => {
                if (inConstructor) {
                    initialState[fieldName] = fieldState;
                } else {
                    this.setState({ [fieldName]: fieldState });
                }
            };

            return this.form.registerField(fieldName, formSubscriber, fieldSubscription);
        });

        this.state = initialState;
        inConstructor = false;
    }

    form: FormApi<Record<string, string>>;
    unsubscribe: () => void;
    unsubscribeFields: Array<() => void>;

    componentWillUnmount() {
        this.unsubscribe();
        this.unsubscribeFields.forEach((unsubscribe: () => void) => unsubscribe());
    }

    handleBlur = (fieldName: string) => this.state[fieldName].blur();

    handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.form.submit();
    };

    handleChange = (value: string, fieldName: string) => {
        this.state[fieldName].change(value);
    };

    handleClearForm = () => {
        this.form.reset();
    };

    handleFocus = (fieldName: string) => this.state[fieldName].focus();

    render() {
        const { formState } = this.state;

        return (
            <form style={{padding: '30px'}} onSubmit={this.handleSubmit}>
                {
                    this.props.fieldLabels.map((fieldName, index) => (
                        <Fragment key={`${fieldName}-${index}`}>
                            <label htmlFor={fieldName}>{fieldName}</label>
                            <EditorFormField
                                value={this.state[fieldName].value || ''}
                                id={fieldName}
                                index={index}
                                name={fieldName}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                                onFocus={this.handleFocus}
                            />
                        </Fragment>
                    ))
                }
                <div>
                    <Button
                        disabled={formState.submitting || !Boolean(Object.keys(formState.values).length) || formState.pristine}
                        label={'submit'}
                        type="submit"
                    />
                </div>
            </form>
        );
    }
}
