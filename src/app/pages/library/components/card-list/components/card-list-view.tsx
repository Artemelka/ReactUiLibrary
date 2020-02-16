import React from 'react';
import { connect } from 'react-redux';
import { CardList } from 'elements';
import { SandboxLayout } from 'components';
import { localizationLabelsSelector } from 'services';
import { logger } from 'utils';
import { CardItems, CardItem } from '../../../../../elements/card-list/types';
import { AppState } from '../../../../../types';

const { BlockItems, Item } = SandboxLayout;
const LONG_TEXT = 'lorem-long';
const getTranslatedItems = (items: CardItems, labels: Record<string, string>) => items.map((item: CardItem) => ({
    ...item,
    content: labels[item.content],
    title: labels[item.title]
}));
const cardItems: CardItems = [
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

export const CardListViewComponent = ({ labels }: { labels: Record<string, string> }) => {
    const items = getTranslatedItems(cardItems, labels);

    return (
        <BlockItems>
            <Item>
                <h3>{labels['card-list']}</h3>
                <CardList cardItems={items} />
            </Item>
            <Item>
                <h3>{labels['card-list-with-light']}</h3>
                <CardList cardItems={items} light/>
            </Item>
        </BlockItems>
    );
};

export const CardListView = connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}))(CardListViewComponent);
