import React from 'react';
import classNames from 'classnames/bind';
import { Button } from '../buttons/Button';
import { CardProps } from './types';

const style = require('./Card.less');
const cn = classNames.bind(style);
const formatIndex = (index: string) => index.length === 1 ? `0${index}` : index;

export const Card = ({ buttonLabel = 'more...', content, onClick, light, positionIndex, title }: CardProps) => (
    <div className={cn('Card', {'Card--light': light})}>
        <div className={cn('Card__decorator')}>
            <div className={cn('Card__container')}>
                <h2 className={cn('Card__index')}>
                    {formatIndex(positionIndex.toString())}
                </h2>
                <h3 className={cn('Card__title')}>
                    {title}
                </h3>
                <p className={cn('Card__content')}>
                    {`${content.slice(0, 100)}...`}
                </p>
                <div className={cn('Card__button')}>
                    <Button accent={light} onClick={onClick} label={buttonLabel}/>
                </div>
            </div>
        </div>
    </div>
);
