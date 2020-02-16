import React from 'react';
import { SandboxLayout } from 'components';
import { InputExample } from './components/input-example';
import { InputView } from './components/input-view';

const { Sandbox } = SandboxLayout;
const inputProps = [
    ['cursorPointer', 'boolean', ''],
    ['defaultValue', 'string', ''],
    ['disabled', 'boolean', ''],
    ['icon', '{alwaysVisible: boolean, name: string, onClick: function}', ''],
    ['id', 'string', '', 'yes'],
    ['InputIconRef', 'RefObject', ''],
    ['name', 'string', '', 'yes'],
    ['onBlur', '(event: SyntheticEvent<HTMLInputElement>) =>', ''],
    ['onChange', '(event: SyntheticEvent<HTMLInputElement>) =>', ''],
    ['onClick', '(event: MouseEvent<HTMLInputElement> | KeyboardEvent) =>', ''],
    ['onFocus', '(event: SyntheticEvent<HTMLInputElement>) =>', ''],
    ['onKeyPress', '(event: KeyboardEvent) =>', ''],
    ['onRef', '(ref: HTMLInputElement) =>', ''],
    ['readOnly', 'boolean', ''],
    ['value', 'string', ''],
    ['width', 'number', '']
];

export const InputSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: inputProps}}
        description="input-description"
        example={InputExample}
        name="Input"
        view={InputView}
    />
);
