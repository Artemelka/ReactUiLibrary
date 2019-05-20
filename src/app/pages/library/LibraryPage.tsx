import React from 'react';
import { SideBar, LayoutModule } from '../../layouts';
import { SandBoxPage } from '../';
import { ComponentsCollection } from '../constants';
import { LibraryFooter } from './LibraryFooter';

const { Aside, Footer, Main, PageLayout } = LayoutModule;
const ASIDE_HEADING = 'React UI Library';
const ASIDE_TEXT = '123456789';

export class LibraryPage extends React.Component {
    render() {
        return (
            <PageLayout>
                <Aside heading={ASIDE_HEADING} footerText={ASIDE_TEXT}>
                    <SideBar items={ComponentsCollection} />
                </Aside>
                <Main>
                    <SandBoxPage />
                </Main>
                <Footer>
                    <LibraryFooter/>
                </Footer>
            </PageLayout>
        );
    }
}
