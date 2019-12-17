import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { SideBarLink, SideBarMenu, SideBarToggle } from './components';
import { formatterComponentName } from './utils';
import { SideBarData, SideBarState, SideBarProps } from './types';
import style from './LibrarySideBar.less';

const cn = classNames.bind(style);

export class LibrarySideBar extends Component<SideBarProps, SideBarState> {
    constructor(props: SideBarProps) {
        super(props);
        const { items } = props;

        this.state = {
            withIndex: false
        };
        this.menuItem = items[0];
        this.itemsWithoutMenuItem = [...items.filter((item: SideBarData) => item !== this.menuItem)];
    }

    menuItem: SideBarData;
    itemsWithoutMenuItem: Array<SideBarData>;

    handleToggle = () => this.setState(({ withIndex }) => ({withIndex: !withIndex}));

    render() {
        const { withIndex } = this.state;
        const { name, url } = this.menuItem;

        return (
            <div className={cn('SideBar')}>
                <div className={cn('SideBar__scroll-wrapper')}>
                    <div className={cn('SideBar__link')}>
                        <SideBarLink name={formatterComponentName(name)} url={url}/>
                    </div>
                    <div className={cn('SideBar__menu')}>
                        <SideBarMenu
                            items={this.itemsWithoutMenuItem}
                            withIndex={withIndex}
                        />
                    </div>
                    <div className={cn('SideBar__toggle')}>
                        <SideBarToggle checked={withIndex} onChange={this.handleToggle}/>
                    </div>
                </div>
            </div>
        );
    }
}
