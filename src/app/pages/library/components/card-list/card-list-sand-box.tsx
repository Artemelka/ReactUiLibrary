import React from 'react';
import { SandboxLayout } from 'components';
import { CardListExample } from './components/card-list-example';
import { CardListView } from './components/card-list-view';

const { Sandbox } = SandboxLayout;
const cardList = [
    ['cardItems', 'Array', 'Array card items', 'yes'],
    ['light', 'boolean', 'light theme style']
];

export const CardListSandBox = () => (
    <Sandbox
        acceptedParametersProps={{items: cardList}}
        description="card-list-description"
        example={CardListExample}
        name="Card list"
        view={CardListView}
    />
);
