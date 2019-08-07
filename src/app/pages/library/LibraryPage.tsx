import React from 'react';
import { Checkbox } from '../../elements';
import { PageLayout } from '../../layouts';
import { SideBar } from '../../components';
import { SandBoxPage } from '../';
import { ComponentsCollection } from '../constants';
import { LibraryFooter } from './LibraryFooter';
import { SideBarAnchor } from '../../components/side-bar/SideBarAnchor';

const { Aside, Footer, Header, Main, Page } = PageLayout;
const ASIDE_HEADING = 'React UI Library';
const ASIDE_TEXT = '123456789';
const CHECKBOX_ID = 'sidebar-toggle';
const menuItem = ComponentsCollection[0];
const sideBarItemsWithoutMenuItem = [...ComponentsCollection.filter(item => item !== menuItem)];

type State = {
    withIndex: boolean;
};

export class LibraryPage extends React.Component<null, State> {
    state = {
        withIndex: false
    };

    handleToggle = () => {
        this.setState(({ withIndex }) => ({withIndex: !withIndex}));
    };

    render() {
        const { withIndex } = this.state;

        return (
            <Page>
                {/*<Header />*/}
                <Aside heading={ASIDE_HEADING} footerText={ASIDE_TEXT} withoutHeader>
                    <SideBarAnchor name={menuItem.name} url={menuItem.url}/>
                    <SideBar items={sideBarItemsWithoutMenuItem} withIndex={withIndex}/>
                    <Checkbox
                        checked={withIndex}
                        id={CHECKBOX_ID}
                        name={CHECKBOX_ID}
                        onChange={this.handleToggle}
                        toggle
                    />
                </Aside>
                <Main withoutHeader>
                    <SandBoxPage />
                </Main>
                <Footer>
                    <LibraryFooter/>
                </Footer>
            </Page>
        );
    }
}
