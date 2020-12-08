import React from 'react';
import { PageLayout } from '../../layouts';
import { FooterAside, LanguageSelect } from 'components';
import { PageContent } from './components';

const { Footer, Main, Page } = PageLayout;

const FinalFormPage = () => (
    <Page>
        <Main withoutHeader fullWidth>
            <PageContent/>
        </Main>
        <Footer footerAside={FooterAside} rightContent={LanguageSelect}/>
    </Page>
);

export default FinalFormPage;
