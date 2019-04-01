import React from 'react';
import classNames from 'classnames';
import './sand-box.less';

interface Props {
    bgWhite?: boolean;
    items: Array<React.ElementType | any>;
}

export const SandBox = (props: Props) => {
    const {items, bgWhite} = props;
    const itemClasses = classNames('Sandbox__item', {
        'Sandbox__item--bg-white': bgWhite
    });

    return (
        <div className={classNames('Sandbox')}>
            {items.map((item, index) => (
                <div className={itemClasses} key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
};
