import React from 'react';
import classNames from 'classnames/bind';
import { Card } from './Card';
import { CardListProps } from './types';

const style = require('./CardList.less');
const cn = classNames.bind(style);

export const CardList = ({ cardItems, light }: CardListProps) => (
    <ul className={cn('Card-list')}>
        {cardItems.map((cardItem, index) =>
            <li className={cn('Card-list__item')} key={`${cardItem.id}_${index}`}>
                <Card {...cardItem} positionIndex={index + 1} light={light} />
            </li>
        )}
    </ul>
);
