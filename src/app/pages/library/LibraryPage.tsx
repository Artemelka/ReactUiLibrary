import React from 'react';

import { PageLayout } from '../../layouts';
import { SideBar } from '../../components';
import { SandBoxPage } from '../sand-box/sand-box-page';
import { ComponentsCollection } from '../constants';
import { LibraryFooter } from './LibraryFooter';

const { Aside, Footer, Header, Main, Page } = PageLayout;
const ASIDE_HEADING = 'React UI Library';
const ASIDE_TEXT = '123456789';

export const LibraryPage = () => (
    <Page>
        {/*<Header />*/}
        <Aside heading={ASIDE_HEADING} footerText={ASIDE_TEXT} withoutHeader>
            <SideBar items={ComponentsCollection}/>
        </Aside>
        <Main withoutHeader>
            <SandBoxPage />
        </Main>
        <Footer>
            <LibraryFooter/>
        </Footer>
    </Page>
);
