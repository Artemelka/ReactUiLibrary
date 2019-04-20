import React from 'react';
import classNames from 'classnames/bind';
import { Anchor } from '../../elements';

const style = require('./SideBar.less');
const cn = classNames.bind(style);

interface Props {
    items: Array<any>;
    routing: {[key: string]: any};
}

export class SideBar extends React.Component<Props> {
    handleLinkClick = (url: string) => () => this.props.routing.push(url);

    render() {
        return (
            <div className={cn('SideBar')}>
                <ul className={cn('SideBar__scroll-wrapper')}>
                    {this.props.items.map(({name, url}, index) =>
                        <li className={cn('SideBar__link')} key={index}>
                            <Anchor
                                label={name}
                                onClick={this.handleLinkClick(url)}
                            />
                        </ li>
                    )}
                </ul>
            </div>
        );
    }
}
