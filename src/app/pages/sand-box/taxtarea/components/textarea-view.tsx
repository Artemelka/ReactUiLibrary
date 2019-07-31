import React from 'react';
import { SandboxLayout } from '../../../../components';
import { TextareaContainer } from './textarea-container';

const { BlockItems } = SandboxLayout;

export const TextareaView = () => (
    <BlockItems>
        <TextareaContainer/>
    </BlockItems>
);
