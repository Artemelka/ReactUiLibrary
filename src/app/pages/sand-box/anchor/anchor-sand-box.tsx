import React from 'react';
import { SandboxLayout, SandboxPropsTable } from '../../../components';
import { AnchorView } from './components/AnchorView';
import { AnchorExample } from './components/AnchorExample';

const { Sandbox } = SandboxLayout;
const anchorProps = [
    ['active', 'boolean', 'active style'],
    ['children', 'string', 'name link'],
    ['disabled', 'boolean', 'disabled style'],
    ['href', 'string', 'url'],
    ['newPage', 'boolean', 'open in new window'],
    ['onClick', 'function', 'callback on click event']
];

export const AnchorSandBox = () => (
    <Sandbox
        acceptedParameters={SandboxPropsTable}
        acceptedParametersProps={{items: anchorProps}}
        description="anchor-description"
        example={AnchorExample}
        name="Anchor"
        view={AnchorView}
    />
);

