import React from 'react';
import { SandboxLayout } from '../../../../components';
import { IconExample } from './components/icon-example';
import { IconView } from './components/icon-view';

const { Sandbox } = SandboxLayout;
const iconProps = [
    ['border', 'boolean', ''],
    ['inverse', 'boolean', ''],
    ['name', 'string', '', 'yes'],
    ['pulse', 'boolean', ''],
    ['size', 'string', ''],
    ['spin', 'boolean', ''],
    ['stack', 'string', ''],
    ['fontSize', 'number', '']
];

export const IconSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: iconProps}}
        description="icon-description"
        example={IconExample}
        name="Icon"
        view={IconView}
    />
);

