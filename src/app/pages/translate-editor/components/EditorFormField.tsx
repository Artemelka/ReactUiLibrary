import React, { ComponentType } from 'react';
import { Textarea, Input } from '../../../elements';
import { TextInputProps } from '../../../elements/inputs/input/types';
import { TextareaContainerProps } from '../../../elements/inputs/textarea/types';

type EditorFormFieldProps = (TextInputProps | TextareaContainerProps);

export const EditorFormField = (props: EditorFormFieldProps) => {
    const isKeyName = props.name === 'key';
    const Component: ComponentType = isKeyName ? Input.Text : Textarea;

    return <Component {...props} {...(isKeyName ? {} : { rows: 4 })} />;
};
