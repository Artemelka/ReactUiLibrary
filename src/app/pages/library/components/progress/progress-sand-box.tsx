import React from 'react';
import { SandboxLayout } from '../../../../components';
import { ProgressExample } from './components/progress-example';
import { ProgressView } from './components/progress-view';

const { Sandbox } = SandboxLayout;
const progressProps = [
    ['darkColor', 'boolean', ''],
    ['strokeWidth', 'number', '', 'yes'],
    ['percent', 'number', '', 'yes'],
    ['radius', 'number', '', 'yes']
];

export const ProgressSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: progressProps}}
        description="progress-description"
        example={ProgressExample}
        name="Progress"
        view={ProgressView}
    />
);
