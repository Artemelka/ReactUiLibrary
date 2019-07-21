import React from 'react';
import { SandboxLayout, SandboxPropsTable } from '../../../components';
import { ButtonExample } from './components/ButtonExample';
import { ButtonView } from './components/ButtonView';

const { Sandbox } = SandboxLayout;
const buttonProps = [
    ['onClick', 'function', 'callback on click event']
];

export const ButtonSandBox = () => (
    <Sandbox
        acceptedParameters={SandboxPropsTable}
        acceptedParametersProps={{items: buttonProps}}
        description="button-description"
        example={ButtonExample}
        name="Button"
        view={ButtonView}
    />
);
