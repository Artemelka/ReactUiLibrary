import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Card, CardProps } from './Card';

const style = require('./CardList.less');
const cn = classNames.bind(style);

export interface CardListProps {
    cardItems: Array<CardProps>;
}

export class CardList extends Component<CardListProps> {
    render() {
        const { cardItems } = this.props;

        return (
            <ul className={cn('Card-list')}>
                {cardItems.map((cardItem, index) =>
                    <li className={cn('Card-list__item')} key={`${cardItem.id}_${index}`}>
                        <Card {...cardItem} positionIndex={index + 1} />
                    </li>
                )}
            </ul>
        );
    }
}
