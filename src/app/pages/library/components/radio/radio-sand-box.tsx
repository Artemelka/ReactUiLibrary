import React from 'react';
import { SandboxLayout } from 'components';
import { RadioExample } from './components/radio-example';
import { RadioView } from './components/radio-view';

const { Sandbox } = SandboxLayout;
const radioProps = [
    ['disabled', 'boolean', ''],
    ['id', 'string', '', 'yes'],
    ['label', '', ''],
    ['value', 'string', '', 'yes'],
    ['onChange', '() =>', ''],
    ['name', 'string', '', 'yes']
];

export const RadioButtonsSandBox = () => (
    <Sandbox
        acceptedParametersProps={{ items: radioProps }}
        description="radio-button-description"
        example={RadioExample}
        name="RadioButtons"
        view={RadioView}
    />
);
