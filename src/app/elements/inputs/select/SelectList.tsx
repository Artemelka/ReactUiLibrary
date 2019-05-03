import React, { Component, SyntheticEvent } from 'react';
import classNames from 'classnames/bind';
import { SelectOptions } from './Select';

const style = require('./SelectList.less');
const cn = classNames.bind(style);


interface Props {
    items: Array<SelectOptions>;
    onClick?: (item: any) => void;
}

export class SelectList extends Component<Props> {
    handleClick = (value: string) => (event: SyntheticEvent<HTMLLIElement>) => {
        const { onClick } = this.props;

        console.log('click', value);
        // onClick(index, value);
    };

    handleKeyPress = (value: string) => (event: SyntheticEvent<HTMLLIElement>) => {
        const { onClick } = this.props;

        console.log('click', value);
        // onClick(index, value);
    };

    render() {
        const { items } = this.props;

        return (
            <ul className={cn('Select-list')}>
                {
                    items.map((item, index) => {
                        const {disabled, title, value} = item;
                        const tabIndex = disabled ? -1 : 0;
                        const onClick = disabled ? () => false : this.handleClick(value);
                        const onKeyPress = disabled ? () => false : this.handleKeyPress(value);

                        return (
                            <li
                                className={cn('Select-list__item', {
                                    'Select-list__item--disabled': disabled
                                })}
                                onClick={onClick}
                                onKeyPress={onKeyPress}
                                key={index}
                                role="button"
                                tabIndex={tabIndex}
                            >
                                {title}
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}
