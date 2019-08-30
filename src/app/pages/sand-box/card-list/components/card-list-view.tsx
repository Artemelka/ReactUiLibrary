import React from 'react';
import { SandboxLayout } from '../../../../components';
import { CardList } from '../../../../elements';
import { TranslateComponent, translate } from '../../../../../services/translate';
import { CardProps } from '../../../../elements/card-list/Card';
import { logger } from '../../utils';

const { BlockItems, Item } = SandboxLayout;
const LONG_TEXT = 'lorem-long';
const getTranslatedItems = (items: Array<CardProps>) => items.map((item: CardProps) => ({
    ...item,
    content: translate(item.content),
    title: translate(item.title)
}));
const cardItems: Array<CardProps> = [
    {
        content: LONG_TEXT,
        id: 1,
        onClick: logger('click card one'),
        title: 'card-one'
    }, {
        content: LONG_TEXT,
        id: 2,
        onClick: logger('click card two'),
        title: 'card-two'
    }, {
        content: LONG_TEXT,
        id: 3,
        onClick: logger('click card three'),
        title: 'card-three'
    }, {
        content: LONG_TEXT,
        id: 4,
        onClick: logger('click card four'),
        title: 'card-four'
    }, {
        content: LONG_TEXT,
        id: 5,
        onClick: logger('click card five'),
        title: 'card-five'
    }
];

export const CardListView = () => {
    const items = getTranslatedItems(cardItems);

    return (
        <BlockItems>
            <Item>
                <h3>
                    <TranslateComponent translateKey="card-list"/>
                </h3>
                <CardList cardItems={items} />
            </Item>
            <Item>
                <h3>
                    <TranslateComponent translateKey="card-list-with-light"/>
                </h3>
                <CardList cardItems={items} light/>
            </Item>
        </BlockItems>
    );
};
