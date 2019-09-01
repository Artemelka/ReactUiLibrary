import React from 'react';
import { PageLayout } from '../../layouts';
import { SideBar } from '../../components';
import { SandBoxPage } from './components/sand-box-page/sand-box-page';
import { ComponentsPages } from './component-pages';
import { LibraryFooter } from './LibraryFooter';

const { Aside, Footer, Header, Main, Page } = PageLayout;
const ASIDE_HEADING = 'React UI Library';
const ASIDE_TEXT = '123456789';

export const LibraryPage = () => (
    <Page>
        {/*<Header />*/}
        <Aside heading={ASIDE_HEADING} footerText={ASIDE_TEXT} withoutHeader>
            <SideBar items={ComponentsPages}/>
        </Aside>
        <Main withoutHeader>
            <SandBoxPage />
        </Main>
        <Footer>
            <LibraryFooter/>
        </Footer>
    </Page>
);
