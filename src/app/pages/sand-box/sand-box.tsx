import React from 'react';
import classNames from 'classnames/bind';

const style = require('./sand-box.less');
const cn = classNames.bind(style);

interface Props {
    bgWhite?: boolean;
    items: Array<React.ElementType | any>;
}

export const SandBox = (props: Props) => {
    const {items, bgWhite} = props;
    const itemClasses = cn('Sandbox__item', {
        'Sandbox__item--bg-white': bgWhite
    });

    return (
        <div className={cn('Sandbox')}>
            {items.map((item, index) => (
                <div className={itemClasses} key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
};
