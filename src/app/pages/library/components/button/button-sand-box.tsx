import React from 'react';
import { SandboxLayout } from 'components';
import { ButtonExample } from './components/ButtonExample';
import { ButtonView } from './components/ButtonView';

const { Sandbox } = SandboxLayout;
const buttonProps = [
    ['accent', 'boolean', 'accent style'],
    ['disabled', 'boolean', 'disabled style'],
    ['iconName', 'string', 'name icon in button'],
    ['label', 'string', 'button text', 'yes'],
    ['onClick', 'function', 'callback on click event'],
    ['size', 'string', 'button size']
];

export const ButtonSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: buttonProps}}
        description="button-description"
        example={ButtonExample}
        name="Button"
        view={ButtonView}
    />
);
