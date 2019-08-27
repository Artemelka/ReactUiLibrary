import React from 'react';
import { SandboxLayout } from '../../../../components';
import { CardList, TranslateComponent } from '../../../../elements';
import { CardProps } from '../../../../elements/card-list/Card';
import { logger } from '../../utils';

const { BlockItems, Item } = SandboxLayout;
const LONG_TEXT = <TranslateComponent translateKey="lorem-long" maxSymbol={100}/>;
const cardItems: Array<CardProps> = [
    {
        content: LONG_TEXT,
        id: 1,
        onClick: logger('click card one'),
        title: <TranslateComponent translateKey="card-one"/>
    }, {
        content: LONG_TEXT,
        id: 2,
        onClick: logger('click card two'),
        title: <TranslateComponent translateKey="card-two"/>
    }, {
        content: LONG_TEXT,
        id: 3,
        onClick: logger('click card three'),
        title: <TranslateComponent translateKey="card-three"/>
    }, {
        content: LONG_TEXT,
        id: 4,
        onClick: logger('click card four'),
        title: <TranslateComponent translateKey="card-four"/>
    }, {
        content: LONG_TEXT,
        id: 5,
        onClick: logger('click card five'),
        title: <TranslateComponent translateKey="card-five"/>
    }
];

export const CardListView = () => (
    <BlockItems>
        <Item>
            <h3>
                <TranslateComponent translateKey="card-list"/>
            </h3>
            <CardList cardItems={cardItems} />
        </Item>
        <Item>
            <h3>
                <TranslateComponent translateKey="card-list-with-light"/>
            </h3>
            <CardList cardItems={cardItems} light/>
        </Item>
    </BlockItems>
);
