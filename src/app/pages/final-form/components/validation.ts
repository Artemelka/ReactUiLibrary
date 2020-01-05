import {
    emailValidation,
    notEmptyStringValidation,
    phoneValidation,
    stringLengthValidationCreator
} from '../../../validation';

const stringLengthValidation = stringLengthValidationCreator(2);
const nameValidation = (value: string) => {
    if (!notEmptyStringValidation(value)) {
        return 'not empty';
    }

    if (!stringLengthValidation(value)) {
        return 'has many symbol';
    }
};
const checkEmail = (value: string): string => {
    if (!emailValidation(value)) {
        return 'invalid email';
    }
};
const checkPhone = (value: string): string => {
    if (!phoneValidation(value)) {
        return 'invalid phone';
    }
};
const validators: Record<string, (value: string) => string> = {
    ['firstName']: nameValidation,
    ['lastName']: nameValidation,
    ['email']: checkEmail,
    ['phone']: checkPhone,
};

export const validate = (values: Record<string, string>) => {
    const errors = Object.entries(values).reduce((acc, [ key, value ]: Array<string>): Record<string, string> => {
        const result: string = validators[key] && validators[key](value);

        return result ? { ...acc, [key]: result } : acc;
    }, {});

    return Object.keys(errors).length ? errors : null;
};
