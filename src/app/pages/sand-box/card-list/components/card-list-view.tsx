import React from 'react';
import { SandboxLayout } from '../../../../components';
import { CardList } from '../../../../elements';

const { BlockItems, Item } = SandboxLayout;
const LONG_TEXT = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является ' +
    'стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал ' +
    'большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.';
const cardItems = [
    {
        content: LONG_TEXT,
        id: 1,
        title: 'Card one'
    }, {
        content: LONG_TEXT,
        id: 2,
        title: 'Card two'
    }, {
        content: LONG_TEXT,
        id: 3,
        title: 'Card three'
    }, {
        content: LONG_TEXT,
        id: 4,
        title: 'Card four'
    }, {
        content: LONG_TEXT,
        id: 5,
        title: 'Card five'
    }
];

export const CardListView = () => (
    <BlockItems>
        <Item>
            <h3>Card list</h3>
            <CardList cardItems={cardItems} />
        </Item>
        <Item>
            <h3>Card list with prop light</h3>
            <CardList cardItems={cardItems} light/>
        </Item>
    </BlockItems>
);
