import React from 'react';
import { SandboxLayout } from 'components';
import { DropDownPanelExample } from './components/drop-down-panel-example';
import { DropDownPanelView } from './components/drop-down-panel-view';

const { Sandbox } = SandboxLayout;
const dropDownPanelProps = [
    ['actionIcon', 'object', 'showed icon on right side {iconName: string, onClick: function'],
    ['darkColor', 'boolean', 'dark theme style'],
    ['emptyStyle', 'boolean', 'without style view'],
    ['onChange', 'function', 'callback on open click event'],
    ['onlyBorder', 'boolean', 'only border style'],
    ['opened', 'boolean', 'open state'],
    ['openingByIcon', 'boolean', 'opened panel on icon click']
];

export const DropDownPanelSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: dropDownPanelProps}}
        description="DropDownPanel-description"
        example={DropDownPanelExample}
        name="DropDownPanel"
        view={DropDownPanelView}
    />
);
