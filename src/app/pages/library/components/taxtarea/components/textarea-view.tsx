import React from 'react';
import { connect } from 'react-redux';
import { Text, Textarea } from 'elements';
import { SandboxLayout, Form } from 'components';
import { localizationLabelsSelector } from 'services';
import { AppState } from '../../../../../types';

const { BlockItems, Item } = SandboxLayout;
const ERROR_MESSAGE_KEY = 'input-error-no-empty';
const ERROR_DEFAULT_MESSAGE_KEY = 'input-error-max-length';
const textareaConfigs = [
    {
        title: 'default',
        props: {
            name: 'textarea-default',
            required: true
        }
    }, {
        title: 'dark Theme',
        props: {
            darkTheme: true,
            name: 'textarea-darkTheme',
        }
    }, {
        title: 'disabled',
        props: {
            disabled: true,
            name: 'textarea-disabled',
        }
    }, {
        title: 'maxlength',
        props: {
            name: 'textarea-maxlength',
            maxlength: 10
        }
    }, {
        title: 'maxlength with error',
        props: {
            name: 'textarea-maxlength-error',
            maxlength: 10,
            error: ERROR_DEFAULT_MESSAGE_KEY
        }
    }, {
        title: 'with placeholder',
        props: {
            name: 'textarea-placeholder',
            placeholder: 'placeholder'
        }
    }, {
        title: 'readonly',
        props: {
            name: 'textarea-readonly',
            readonly: true,
        }
    }, {
        title: 'with rows = 5',
        props: {
            name: 'textarea',
            rows: 5
        }
    }, {
        title: 'with errors',
        props: {
            name: 'textarea-error',
            error: ERROR_MESSAGE_KEY
        }
    }
];
const fieldsName = textareaConfigs.map(item => item.props.name);
const formConfig = {
    initialValues: {
        ...fieldsName.reduce((acc, name) => ({...acc, [name]: ''}), {}),
        ['textarea-readonly']: 'read only',
        ['textarea-maxlength-error']: 'asdqwertyu'
    },
    onSubmit: (values: Record<string, string>) => { console.log('=== onSubmit ===', values); }
};
const formSubscription = {
    form: {
        active: true,
        pristine: true,
        submitting: true,
        values: true
    },
    fields: {
        value: true,
        error: true
    }
};

export const TextareaViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <Form
        fieldsName={fieldsName}
        formConfig={formConfig}
        subscription={formSubscription}
    >
        {(formProps) => (
            <BlockItems>
                {textareaConfigs.map(({title, props}, index) => (
                    <Item key={`${props.name}_${index}`}>
                        <Text.H4>{title}</Text.H4>
                        <Textarea
                            {...props}
                            error={props.error || formProps.state[props.name].error}
                            errorMessage={labels[props.error] || labels[formProps.state[props.name].error] || formProps.state[props.name].error}
                            id={props.name}
                            onBlur={formProps.handleBlur}
                            onFocus={formProps.handleFocus}
                            onChange={formProps.handleChange}
                            value={formProps.state[props.name].value}
                        />
                    </Item>
                ))}
            </BlockItems>
        )}
    </Form>
);

export const TextareaView = connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}))(TextareaViewComponent);
