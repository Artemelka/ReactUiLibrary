import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { LanguageSelect } from 'components';
import { injectReducersAndSagas } from '../../application/redux';
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

export class HomePage extends Component {
    render() {
        return (
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
        );
    }
}

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

export default injectReducersAndSagas({
    asyncReducers,
    asyncSagas
})(HomePage);
