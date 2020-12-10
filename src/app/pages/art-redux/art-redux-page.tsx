import React, { useState } from 'react';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; // tslint:disable-line:no-implicit-dependencies
import { FooterAside, LanguageSelect } from 'components';
import { createArtStore, ArtStoreProvider, ArtStoreInjector } from 'services';
import { PageLayout } from '../../layouts';
import { PageContent } from './components/page-content';
import {
    TEST_REDUCER_NAME,
    testReducer,
    ASYNC_REDUCER_NAME,
    testInjectReducer,
    artReduxWatcherSaga,
    ART_REDUX_WATCHER_SAGA_NAME
} from './redux';

const { Footer, Main, Page } = PageLayout;

const sagaMiddleware = createSagaMiddleware();
const TEST_REDUCERS = {
    [TEST_REDUCER_NAME]: testReducer
};

const appArtStore = createArtStore({
    reducers: TEST_REDUCERS,
    middlewares: [logger, sagaMiddleware],
    runSaga: sagaMiddleware.run
});

const asyncReducers = [{ name: ASYNC_REDUCER_NAME, reducer: testInjectReducer }];
const asyncSagas = [{ name: ART_REDUX_WATCHER_SAGA_NAME, saga: artReduxWatcherSaga }];

export const ArtReduxPage = () => {
    const [isInject, setIsInject] = useState(false);

    const handleInject = () => setIsInject(true);

    const handleRemove = () => setIsInject(false);

    return (
        <ArtStoreProvider store={appArtStore}>
            <Page>
                <Main withoutHeader fullWidth>
                    {isInject
                        ? (
                            <ArtStoreInjector reducersToInject={asyncReducers} sagasToInject={asyncSagas} withRemove>
                                <PageContent
                                    isInject={isInject}
                                    onInject={handleInject}
                                    onRemove={handleRemove}
                                />
                            </ArtStoreInjector>
                        ) : (
                            <PageContent
                                isInject={isInject}
                                onInject={handleInject}
                                onRemove={handleRemove}
                            />
                        )
                    }
                </Main>
                <Footer footerAside={FooterAside} rightContent={LanguageSelect}/>
            </Page>
        </ArtStoreProvider>
    );
};
