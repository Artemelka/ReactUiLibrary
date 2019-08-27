import React, { Component, ReactNode } from 'react';
import classNames from 'classnames/bind';
import { Button, TranslateComponent } from '../index';

const style = require('./Card.less');
const cn = classNames.bind(style);

export interface CardProps {
    buttonLabel?: string | ReactNode;
    content?: string | ReactNode;
    id: number;
    onClick: () => void;
    light?: boolean;
    positionIndex?: number;
    title?: string | ReactNode;
}

const formatIndex = (index: string) => index.length === 1 ? `0${index}` : index;

export class Card extends Component<CardProps> {
    static defaultProps = {
        content: '',
        positionIndex: 1,
        title: ''
    };

    render() {
        const { buttonLabel, content, onClick, light, positionIndex, title } = this.props;
        // const formattedContent = `${content.slice(0, 100)}...`;
        const label = buttonLabel || <TranslateComponent translateKey="more"/>;

        return (
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
                            {content}
                        </p>
                        <div className={cn('Card__button')}>
                            <Button accent={light} onClick={onClick} label={label}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
