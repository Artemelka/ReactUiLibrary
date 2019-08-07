import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Anchor } from '../../elements';



interface Props extends RouteComponentProps {
    index?: string;
    name: string;
    url: string;
    withIndex?: boolean;
}

export class SideBarLinkContainer extends Component<Props> {
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
