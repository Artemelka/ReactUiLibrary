export const stringLengthValidationCreator = (validLength: number) =>
    (value: string): boolean => value.length > validLength;

export const notEmptyStringValidation = (value: string): boolean => Boolean(value.length);
