import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Anchor } from '../../../../elements';
import { SideBarLinkProps } from '../../types';

export class SideBarLinkContainer extends Component<SideBarLinkProps> {
    handleClick = () => {
        const { history: { push }, url } = this.props;

        push(url);
    };

    render() {
        const { index, location: { pathname }, name, url, withIndex } = this.props;

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

export const SideBarLink = withRouter(SideBarLinkContainer);
