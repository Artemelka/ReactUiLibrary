import React from 'react';
import { SandboxLayout } from 'components';
import { TextareaExample } from './components/textarea-example';
import { TextareaView } from './components/textarea-view';

const { Sandbox } = SandboxLayout;
const textareaProps = [
    ['darkTheme', 'boolean', 'darck theme style'],
    ['disabled', 'boolean', 'disabled style'],
    ['onBlur', '() =>', ''],
    ['onClick', '() =>', ''],
    ['onFocus', '() =>', ''],
    ['onKeyPress', '() =>', ''],
    ['', '', '']
];

export const TextareaSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: textareaProps}}
        description="textarea-description"
        example={TextareaExample}
        name="Textarea"
        view={TextareaView}
    />
);
