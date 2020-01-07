import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import { Button, Input, Textarea, Text } from '../../../elements';
import { Form } from '../../../components';
import { FormChildrenProps } from '../../../components/form/types';
import { sleep } from '../../../utils';
import { validate } from './validation';
import style from './page-content.less';

const cn = classNames.bind(style);

const fieldNames: Array<string> = ['firstName', 'lastName', 'email', 'phone', 'notes'];
const formConfig = {
    initialValues: {
        firstName: 'Pol',
        lastName: 'Gol',
        email: '',
        phone: '',
        notes: '',
    },
    onSubmit: (values: Record<string, string>) => {
        sleep(800).then(() => {
            // @ts-ignore
            console.log('=== onSubmit ===', JSON.stringify(values, 0, 2));
        });
    },
    validate
};
const subscription = {
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

export const PageContent = () => (
    <Form
        className={cn('Form')}
        fieldsName={fieldNames}
        formConfig={formConfig}
        subscription={subscription}
    >
        {(props: FormChildrenProps) => (
            <Fragment>
                <div className={cn('Form__heading')} >
                    <Text.H2>FINAL FORM TEST</Text.H2>
                </div>
                <div className={cn('Form__fields')}>
                    {fieldNames.map((name, index) => (
                        <div className={cn('Form__input')} key={index + name}>
                            <label htmlFor={name}>{name}</label>
                            {name === 'notes'
                                ? (
                                    <Textarea
                                        error={Boolean(props.state[name].error)}
                                        errorMessage={props.state[name].error}
                                        id={name}
                                        name={name}
                                        onChange={props.handleChange}
                                        onFocus={props.handleFocus}
                                        onBlur={props.handleBlur}
                                        value={props.state[name].value}
                                        maxlength={20}
                                    />
                                ) : (
                                    <Input.Text
                                        error={Boolean(props.state[name].error)}
                                        errorMessage={props.state[name].error}
                                        id={name}
                                        name={name}
                                        onChange={props.handleChange}
                                        onFocus={props.handleFocus}
                                        onBlur={props.handleBlur}
                                        value={props.state[name].value}
                                    />
                                )
                            }
                        </div>
                    ))}
                </div>
                <div className={cn('Form__buttons')}>
                    <Button
                        type="submit"
                        label="submit"
                    />
                    <Button
                        onClick={props.handleClearClick}
                        type="button"
                        label="clear"
                    />
                </div>
            </Fragment>
        )}
    </Form>
);
