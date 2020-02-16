import React from 'react';
import { SandboxLayout } from 'components';
import { SelectExample } from './components/select-example';
import { SelectView } from './components/select-view';

const { Sandbox } = SandboxLayout;
const selectProps = [
    ['disabled', 'boolean', ''],
    ['inputWidth', 'number', ''],
    ['listOpenTop', 'boolean', ''],
    ['multiple', 'boolean', ''],
    ['maxListHeight', 'number', ''],
    ['id', 'string', '', 'yes'],
    ['name', 'string', '', 'yes'],
    ['onChange', '(value: string) =>', ''],
    ['options', 'Array<SelectOptions>', '', 'yes'],
    ['value', 'string', '', 'yes']
];


export const SelectSandBox = () => (
    <Sandbox
        acceptedParametersProps={{ items: selectProps }}
        description="select-description"
        example={SelectExample}
        name="Select"
        view={SelectView}
    />
);
