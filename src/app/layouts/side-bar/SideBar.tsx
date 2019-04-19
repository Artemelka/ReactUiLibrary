import React from 'react';
import classNames from 'classnames';
import { Anchor } from '../../elements';
import './SideBar.less';

interface Props {
    items: Array<any>;
    routing: {[key: string]: any};
}

export class SideBar extends React.Component<Props> {
    handleLinkClick = (url: string) => () => this.props.routing.push(url);

    render() {
        return (
            <div className={classNames('SideBar')}>
                <ul className={classNames('SideBar__scroll-wrapper')}>
                    {this.props.items.map(({name, url}, index) =>
                        <li className={classNames('SideBar__link')} key={index}>
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
