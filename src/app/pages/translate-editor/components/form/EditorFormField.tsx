import React, { ComponentType } from 'react';
import { Textarea, Input } from '../../../../elements';
import { EditorFormFieldProps } from '../table/redux/types';

export const EditorFormField = (props: EditorFormFieldProps) => {
    const isKeyName = props.name === 'key';
    const Component: ComponentType = isKeyName ? Input.Text : Textarea;

    return <Component {...props} {...(isKeyName ? {} : { rows: 4 })} />;
};
