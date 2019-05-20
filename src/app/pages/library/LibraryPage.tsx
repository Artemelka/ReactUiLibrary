import React from 'react';
import { connect } from 'react-redux';
import { SideBar, LayoutModule } from '../../layouts';
import { SandBoxPage } from '../';
import { ComponentsCollection } from '../constants';
import { LibraryFooter } from './LibraryFooter';

const { Aside, Footer, Main, PageLayout } = LayoutModule;
const ASIDE_HEADING = 'React UI Library';
const ASIDE_TEXT = '123456789';

interface Props {
    history: {[key: string]: any};
}

class LibraryPageComponent extends React.Component<Props> {
    handleGoHomeClick = () => this.props.history.push('/');

    render() {
        return (
            <PageLayout>
                <Aside heading={ASIDE_HEADING} footerText={ASIDE_TEXT}>
                    <SideBar items={ComponentsCollection} routing={this.props.history} />
                </Aside>
                <Main>
                    <SandBoxPage />
                </Main>
                <Footer onGoHomeClick={this.handleGoHomeClick}>
                    <LibraryFooter/>
                </Footer>
            </PageLayout>
        );
    }
}

export const LibraryPage = connect()(LibraryPageComponent);
