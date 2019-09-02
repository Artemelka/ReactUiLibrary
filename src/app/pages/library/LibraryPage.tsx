import React from 'react';
import { PageLayout } from '../../layouts';
import { FooterAside, LanguageSelect, LibrarySideBar } from '../../components';
import { SandBoxPage } from './components/sand-box-page/sand-box-page';
import { ComponentsPages } from './component-pages';

const { Aside, Footer, Header, Main, Page } = PageLayout;
const ASIDE_HEADING = 'React UI Library';
const ASIDE_TEXT = '123456789';
const LibraryFooter = () => <div>123456789</div>;

const LibraryPage = () => (
    <Page>
        {/*<Header />*/}
        <Aside heading={ASIDE_HEADING} footerText={ASIDE_TEXT} withoutHeader>
            <LibrarySideBar items={ComponentsPages}/>
        </Aside>
        <Main withoutHeader>
            <SandBoxPage />
        </Main>
        <Footer footerAside={FooterAside} rightContent={LanguageSelect}>
            <LibraryFooter/>
        </Footer>
    </Page>
);

export default LibraryPage;
