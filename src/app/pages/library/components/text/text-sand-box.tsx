import React from 'react';
import { SandboxLayout } from 'components';
import { TextExample } from './components/text-example';
import { TextView } from './components/text-view';

const { Sandbox } = SandboxLayout;
const textProps = [
    ['align', 'string', ''],
    ['bold', 'boolean', ''],
    ['children', 'string | ReactNode', '', 'yes'],
    ['light', 'boolean', ''],
    ['upper', 'boolean', '']
];

export const TextSandBox = () => (
    <Sandbox
        acceptedParametersProps={{ items: textProps }}
        description="text-description"
        example={TextExample}
        name="Text"
        view={TextView}
    />
);
