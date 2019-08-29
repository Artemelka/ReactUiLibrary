import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { SideBarLink } from './SideBarLink';
import { Checkbox, Text } from '../../elements';
import { TranslateComponent } from '../../../services/translate';

const style = require('./SideBar.less');
const cn = classNames.bind(style);
const SAND_BOX = 'SandBox';
const CHECKBOX_ID = 'sidebar-toggle';
const formatterComponentName = (fullName: string): string => {
    const endIndex = fullName.indexOf(SAND_BOX);

    return endIndex !== -1 ? fullName.substring(0, endIndex) : fullName;
};
const formatterIndex = (index: number): string => (index < 10) ? `0${index}` : `${index}`;

type Data = {[key: string]: any};
type State = {
    withIndex: boolean;
};
interface Props {
    items: Array<Data>;
}

export class SideBar extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const { items } = props;

        this.state = {
            withIndex: false
        };
        this.menuItem = items[0];
        this.itemsWithoutMenuItem = [...items.filter((item: Data) => item !== this.menuItem)];
    }

    menuItem: Data;
    itemsWithoutMenuItem: Array<Data>;

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
