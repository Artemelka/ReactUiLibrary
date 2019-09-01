import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Checkbox, Text } from '../../elements';
import { TranslateComponent } from '../../../services/translate';
import { SideBarLink } from './SideBarLink';
import { formatterComponentName, formatterIndex } from './utils';
import { SideBarData, SideBarState, SideBarProps } from './types';

const style = require('./SideBar.less');
const cn = classNames.bind(style);
const CHECKBOX_ID = 'sidebar-toggle';

export class SideBar extends Component<SideBarProps, SideBarState> {
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
                    <div className={cn('SideBar__menu-link')}>
                        <SideBarLink name={formatterComponentName(name)} url={url}/>
                    </div>
                    <ul className={cn('SideBar__list')}>
                        {this.itemsWithoutMenuItem.map(({name, url}, index) => (
                            <li className={cn('SideBar__list-item')} key={index}>
                                <SideBarLink
                                    index={formatterIndex(index + 1)}
                                    name={formatterComponentName(name)}
                                    url={url}
                                    withIndex={withIndex}
                                />
                            </ li>
                        ))}
                    </ul>
                    <div className={cn('SideBar__toggle-wrapper')}>
                        <Checkbox
                            checked={withIndex}
                            id={CHECKBOX_ID}
                            name={CHECKBOX_ID}
                            onChange={this.handleToggle}
                            toggle
                        />
                        <label className={cn('SideBar__toggle-label')} htmlFor={CHECKBOX_ID}>
                            <Text.Paragraph>
                                <TranslateComponent translateKey={'Show index'}/>
                            </Text.Paragraph>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
