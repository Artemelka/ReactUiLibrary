import React from 'react';
import { PageLayout } from '../../layouts';
import { SideBar } from '../../components';
import { SandBoxPage } from '../index';
import { ComponentsCollection } from '../constants';
import { LibraryFooter } from './LibraryFooter';
import { SideBarLink } from '../../components/side-bar/SideBarLink';

const { Aside, Footer, Header, Main, Page } = PageLayout;
const [ menuItem, ...restItems ] = ComponentsCollection;
const ASIDE_HEADING = 'React UI Library';
const ASIDE_TEXT = '123456789';

type State = {
    withIndex: boolean;
};

export const LibraryPage = () => (
    <Page>
        {/*<Header />*/}
        <Aside heading={ASIDE_HEADING} footerText={ASIDE_TEXT} withoutHeader>
            <SideBarLink name={menuItem.name} url={menuItem.url}/>
            <SideBar items={restItems}/>
        </Aside>
        <Main withoutHeader>
            <SandBoxPage />
        </Main>
        <Footer>
            <LibraryFooter/>
        </Footer>
    </Page>
);
