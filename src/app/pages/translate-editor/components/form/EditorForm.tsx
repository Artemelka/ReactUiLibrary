import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../../elements';
import { Form } from '../../../../components';
import { localizationLabelsSelector } from '../../../../../services/localization';
import { EditorFormField } from './EditorFormField';
import { validate } from './validation';
import { LocalizationState } from '../../../../../services/localization/types';
import { EditorFormProps } from '../table/redux/types';

const subscription = {
    fields: {
        value: true,
        error: true
    },
    form: {
        active: true,
        pristine: true,
        submitting: true,
        values: true
    }
};


export class EditorFormComponent extends Component<EditorFormProps> {
    render() {
        const { editRowData, fieldLabels, labels, onSubmit } = this.props;

        return (
            <Form
                fieldsName={fieldLabels}
                formConfig={{
                    initialValues: editRowData,
                    onSubmit,
                    validate
                }}
                subscription={subscription}
            >
                {(formProps) => (
                    <Fragment>
                        {fieldLabels.map((fieldName) => (
                            <Fragment key={fieldName}>
                                <label htmlFor={fieldName}>{fieldName}</label>
                                <EditorFormField
                                    error={Boolean(formProps.state[fieldName].error)}
                                    errorMessage={labels[formProps.state[fieldName].error] || formProps.state[fieldName].error}
                                    id={fieldName}
                                    name={fieldName}
                                    onBlur={formProps.handleBlur}
                                    onChange={formProps.handleChange}
                                    onFocus={formProps.handleFocus}
                                    value={formProps.state[fieldName].value || ''}
                                />
                            </Fragment>
                        ))}
                        <div>
                            <Button
                                // disabled={formProps.state.submitting || !Boolean(Object.keys(formProps.state.values).length) || formProps.state.pristine}
                                type="submit"
                                label="submit"
                            />
                        </div>
                    </Fragment>
                )}
            </Form>
        );
    }
}

export const EditorForm = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}), {

})(EditorFormComponent);
