import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { LanguageSelect } from 'components';
// import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { StoreLoader } from '../../application/inject-redusers-and-sagas';
import { TestRequest, TestRouter } from './components';
import {
    homePageReducer,
    HOME_PAGE_REDUCER_NAME,
    GET_REQUEST_WATCHER_SAGA_NAME,
    getRequestWatcherSaga
} from './redux';

const style = require('./HomePage.less');
const cn = classNames.bind(style);
const SELECT_ID = 'home select';

const asyncReducers = [{
    name: HOME_PAGE_REDUCER_NAME,
    reducer: homePageReducer,
    rewritable: true
}];
const asyncSagas = [
    {
        name: GET_REQUEST_WATCHER_SAGA_NAME,
        saga: getRequestWatcherSaga
    }
];
const storeInjectConfig = {
    sagasToInject: asyncSagas,
    reducersToInject: asyncReducers
};

class HomePage extends Component {
    render() {
        return (
            <StoreLoader storeInjectConfig={storeInjectConfig}>
                <div className={cn('Test-page')}>
                    <div className={cn('Test-page__item')}>
                        <h1>Test home page</h1>
                    </div>
                    <div className={cn('Test-page__item')}>
                        <h3>Test router</h3>
                        <TestRouter />
                    </div>
                    <div className={cn('Test-page__item')}>
                        <h3>Test request</h3>
                        <TestRequest/>
                    </div>
                    <div className={cn('Test-page__item')}>
                        <h3>Test Localization</h3>
                        <LanguageSelect id={SELECT_ID} name={SELECT_ID}/>
                    </div>
                    <div className={cn('Test-page__item')}>
                        <h3>Test ...</h3>
                        ...
                    </div>
                </div>
            </StoreLoader>
        );
    }
}

export default HomePage;
