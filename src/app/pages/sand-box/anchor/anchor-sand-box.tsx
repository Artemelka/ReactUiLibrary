import React from 'react';
import { SandboxLayout } from '../../../components';
import { PanelPropsDetails } from './components/PanelPropsDetails';
import { AnchorView } from './components/AnchorView';
import { AnchorExample } from './components/AnchorExample';

const { Sandbox } = SandboxLayout;

export const AnchorSandBox = () => (
    <Sandbox
        acceptedParameters={PanelPropsDetails}
        description="anchor-description"
        example={AnchorExample}
        name="Anchor"
        view={AnchorView}
    />
);

