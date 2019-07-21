import React from 'react';
import { SandboxLayout } from '../../../components';
import { ButtonGroupExample } from './components/ButtonGroupExample';
import { ButtonGroupView } from './components/ButtonGroupView';

const { Sandbox } = SandboxLayout;
const buttonProps = [
    ['separatorSize', 'string', 'separator size'],
    ['round', 'boolean', 'rounded border first & last button'],
    ['buttonComponent', 'Component', 'button component variant']
];

export const ButtonGroupSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: buttonProps}}
        description="button-group-description"
        example={ButtonGroupExample}
        name="ButtonGroup"
        view={ButtonGroupView}
    />
);
