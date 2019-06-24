import React, { Component } from 'react';
import { withRouter } from 'react-router';
import classNames from 'classnames/bind';
import { Anchor } from '../../elements';

const style = require('./SideBar.less');
const cn = classNames.bind(style);
const SAND_BOX = 'SandBox';
const formatterComponentName = (fullName: string): string => fullName.substring(0, fullName.indexOf(SAND_BOX));

interface Props {
    items: Array<any>;
    history?: {push: (url: string) => void};
    location?: {[key: string]: any};
}

@(withRouter as any)
export class SideBar extends Component<Props> {
    handleLinkClick = (url: string) => () => this.props.history.push(url);

    render() {
        const { items, location: { pathname }} = this.props;

        return (
            <div className={cn('SideBar')}>
                <ul className={cn('SideBar__scroll-wrapper')}>
                    {items.map(({name, url}, index) =>
                        <li className={cn('SideBar__link')} key={index}>
                            <Anchor
                                active={pathname === url}
                                onClick={this.handleLinkClick(url)}
                            >
                                {formatterComponentName(name)}
                            </Anchor>
                        </ li>
                    )}
                </ul>
            </div>
        );
    }
}
