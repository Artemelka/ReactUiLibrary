import React, { Fragment } from 'react';
import { SandBox } from '../sand-box';
import { CardList } from '../../../elements';

const LONG_TEXT = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.';

const cardListProps = [
    {
        cardItems: [
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
        ],
        title: 'Card list'
    }, {
        cardItems: [
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
        ],
        light: true,
        title: 'Card list with prop light'
    }
];

const sandBoxItems = cardListProps.map(({ cardItems, light, title}, index) => () => (
    <Fragment key={index} >
        <h3>{title}</h3>
        <CardList cardItems={cardItems} light={light}/>
    </Fragment>
));

export const CardListSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
