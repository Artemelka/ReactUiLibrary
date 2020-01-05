import React, { FC, SyntheticEvent, ComponentType } from 'react';

interface FormInputProps {
    error?: boolean;
    errorMessage?: string;
    id?: string;
    name: string;
    onBlur: (event: SyntheticEvent, name: string) => void;
    onChange: (event: SyntheticEvent, value: string, name: string) => void;
    onFocus: (event: SyntheticEvent, name: string) => void;
    value: string;
}

export const formFieldHoc = (WrappedComponent: ComponentType<any>): React.FC<FormInputProps> => {
    const FormInput: FC<FormInputProps> = (props: FormInputProps) => {
        const handleBlur = (event: SyntheticEvent) => props.onBlur(event, props.name);

        const handleChange = (event: SyntheticEvent, value: string) => props.onChange(event, value, props.name);

        const handleFocus = (event: SyntheticEvent) => props.onFocus(event, props.name);

        return (
            <WrappedComponent
                {...props}
                id={props.id || props.name}
                name={props.name}
                onBlur={handleBlur}
                onChange={handleChange}
                onFocus={handleFocus}
                value={props.value}
            />
        );
    };

    return FormInput;
};
