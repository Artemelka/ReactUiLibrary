import React from 'react';
import classNames from 'classnames/bind';
import { SideBarAnchor } from './SideBarAnchor';

const style = require('./SideBar.less');
const cn = classNames.bind(style);
const SAND_BOX = 'SandBox';
const formatterComponentName = (fullName: string): string => {
    const endIndex = fullName.indexOf(SAND_BOX);

    return endIndex !== -1 ? fullName.substring(0, endIndex) : fullName;
};
const formatterIndex = (index: number): string => (index < 10) ? `0${index}` : `${index}`;

type Data = {[key: string]: any};
interface Props {
    items: Array<Data>;
    withIndex?: boolean;
}

export const SideBar = ({ items, withIndex }: Props) => (
    <div className={cn('SideBar')}>
        <ul className={cn('SideBar__scroll-wrapper')}>
            {items.map(({name, url}, index) => (
                <li className={cn('SideBar__link')} key={index}>
                    <SideBarAnchor
                        index={formatterIndex(index + 1)}
                        name={formatterComponentName(name)}
                        url={url}
                        withIndex={withIndex}
                    />
                </ li>
            ))}
        </ul>
    </div>
);
