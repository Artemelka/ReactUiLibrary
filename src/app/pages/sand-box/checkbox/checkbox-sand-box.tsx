import React from 'react';
import { CheckboxExample } from './components/checkbox-example';
import { CheckboxView } from './components/checkbox-view';
import { SandboxLayout } from '../../../components';

const { Sandbox } = SandboxLayout;
const checkboxProps = [
    ['checked', 'boolean', 'checked style'],
    ['disabled', 'boolean', 'disabled style'],
    ['id', 'string', 'id element', 'yes'],
    ['indeterminate', 'boolean', 'indeterminate style'],
    ['name', 'string', 'name element', 'yes'],
    ['onChange', 'Function', 'callback for change event'],
    ['radio', 'boolean', 'radio style'],
    ['toggle', 'boolean', 'toggle style'],
    ['withRef', 'Function', 'callback for create ref'],
];

export const CheckboxSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: checkboxProps}}
        description="checkbox-description"
        example={CheckboxExample}
        name="Checkbox"
        view={CheckboxView}
    />
);
