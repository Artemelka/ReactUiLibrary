import React, { useEffect, useState } from 'react';
import { FooterAside, LanguageSelect } from 'components';
import { createArtStore, ArtStoreProvider } from 'services';
import { PageLayout } from '../../layouts';
import { PageContent } from './components/page-content';
import {
    TEST_REDUCER_NAME,
    testReducer,
    ASYNC_REDUCER_NAME,
    testInjectReducer,
} from './redux';

const { Footer, Main, Page } = PageLayout;

const TEST_REDUCERS = {
    [TEST_REDUCER_NAME]: testReducer
};
const appArtStore = createArtStore({ reducers: TEST_REDUCERS });
const injectReducers = appArtStore.injectReducers;

export const ArtReduxPage = () => {

    useEffect(() => {
        injectReducers([{ name: ASYNC_REDUCER_NAME, reducer: testInjectReducer }]);

        return () => {};
    }, []);

    return (
        <ArtStoreProvider store={appArtStore}>
            <Page>
                <Main withoutHeader fullWidth>
                    <PageContent />
                </Main>
                <Footer footerAside={FooterAside} rightContent={LanguageSelect}/>
            </Page>
        </ArtStoreProvider>
    );
};
