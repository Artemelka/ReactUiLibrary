import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Anchor, DropDownPanel, DropDownDetails, DropDownSummary } from '../../../../elements';
import { SideBarMenu } from '../side-bar-menu/SibeBarMenu';
import { MenuDropDownState, MenuDropDownProps } from '../../types';

export class SideBarMenuDropDownContainer extends Component<MenuDropDownProps, MenuDropDownState> {
    state = {
        opened: false
    };

    handleClick = () => this.setState(({opened}) => ({opened: !opened}));

    render() {
        const { items, index, withIndex } = this.props;
        const url = items[0].url;
        const start = url.indexOf('/', 1) + 1;
        const end = url.lastIndexOf('/');
        const name = url.slice(start, end);

        return (
            <DropDownPanel opened={this.state.opened} onChange={this.handleClick} emptyStyle>
                <DropDownSummary>
                    <Anchor>
                        {withIndex && index ? `${index} ${name}` : name}
                    </Anchor>
                </DropDownSummary>
                <DropDownDetails>
                    <SideBarMenu items={items} indexPrefix={index} nested withIndex={withIndex}/>
                </DropDownDetails>
            </DropDownPanel>
        );
    }
}

export const SideBarMenuDropDown = withRouter(SideBarMenuDropDownContainer);

