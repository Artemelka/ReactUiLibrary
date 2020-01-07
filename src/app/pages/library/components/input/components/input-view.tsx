import React from 'react';
import { Text, Input } from '../../../../../elements';
import { SandboxLayout, Form } from '../../../../../components';

const { BlockItems, Item } = SandboxLayout;
const inputProps = [
    {
        id: 'test1',
        label: 'Input.Text',
    }, {
        id: 'test2',
        label: 'Input.Text disabled',
        disabled: true
    }, {
        id: 'test3',
        label: 'Input.Text with default value & custom width',
        width: 200
    }, {
        error: 'Error text',
        id: 'test4',
        label: 'Input.Text with error',
    }
];
const fieldsName = inputProps.map(props => props.id);
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
const formConfig = {
    initialValues: {
        ...fieldsName.reduce((acc, name) => ({...acc, [name]: ''}), {}),
        ['test3']: 'defaultValue'
    },
    onSubmit: (values: Record<string, string>) => { console.log('=== onSubmit ===', values); }
};

export const InputView = () => (
    <Form
        fieldsName={fieldsName}
        formConfig={formConfig}
        subscription={formSubscription}
    >
        {(formProps) => (
            <BlockItems>
                {inputProps.map(({ label, ...props}) => (
                    <Item key={props.id}>
                        <Text.H3>{label}</Text.H3>
                        <Input.Text
                            {...props}
                            error={props.error || formProps.state[props.id].error}
                            errorMessage={props.error || formProps.state[props.id].error}
                            name={props.id}
                            onBlur={formProps.handleBlur}
                            onFocus={formProps.handleFocus}
                            onChange={formProps.handleChange}
                            value={formProps.state[props.id].value}
                        />
                    </Item>
                ))}
            </BlockItems>
        )}
    </Form>
);
