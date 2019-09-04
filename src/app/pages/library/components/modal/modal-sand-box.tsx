import React from 'react';
import { SandboxLayout } from '../../../../components';
import { ModalExample } from './components/ModalExample';
import { ModalView } from './components/ModalView';

const { Sandbox } = SandboxLayout;
const modalProps = [
    ['onClose', 'Function', 'callback on click close icon'],
    ['opened', 'boolean', 'state modal'],
    ['size', 'symbol', 'modal size from const ModalSize'],
    ['title', 'string', 'title in header modal', 'yes']
];

export const ModalSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: modalProps}}
        description="modal-description"
        example={ModalExample}
        name="Anchor"
        view={ModalView}
    />
);
