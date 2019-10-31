import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Anchor } from '../../../../elements';
import { routerLocationSelector } from './selectors';
import { SideBarLinkProps } from '../../types';

export class SideBarLinkContainer extends Component<SideBarLinkProps> {
    handleClick = () => {
        const { push, url } = this.props;

        push(url);
    };

    render() {
        const { index, router: { pathname }, name, url, withIndex } = this.props;

        return (
            <Anchor
                active={pathname === url}
                onClick={this.handleClick}
            >
                {withIndex && index ? `${index} ${name}` : name}
            </Anchor>
        );
    }
}

export const SideBarLink = connect(
    store => ({ router: routerLocationSelector(store)}),
    { push }
    )(SideBarLinkContainer);
