import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { SideBarLink } from '../side-bar-link/SideBarLink';
import { SideBarMenuDropDown } from '../side-bar-menu-drop-down/SideBarMenuDropDown';
import { formatterComponentName, formatterIndex } from '../../utils';
import { SideBarListProps } from '../../types';
import style from './SideBarMenu.less';

const cn = classNames.bind(style);

export class SideBarMenu extends Component<SideBarListProps> {
    render() {
        const { items, indexPrefix, nested, withIndex } = this.props;

        return (
            <ul className={cn('Side-bar-list', { 'Side-bar-list--nested': nested })}>
                {
                    items.map((item, index) => {
                        const formatIndex = formatterIndex(index + 1);

                        return (
                            <li className={cn('Side-bar-list__item')} key={index + item.url}>
                                {
                                    Array.isArray(item)
                                        ? (
                                            <SideBarMenuDropDown
                                                items={item}
                                                withIndex={withIndex}
                                                index={formatIndex}
                                            />
                                        ) : (
                                            <SideBarLink
                                                index={indexPrefix ? `${indexPrefix}.${formatIndex}` : formatIndex}
                                                name={formatterComponentName(item.name)}
                                                url={item.url}
                                                withIndex={withIndex}
                                            />
                                        )
                                }
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}
