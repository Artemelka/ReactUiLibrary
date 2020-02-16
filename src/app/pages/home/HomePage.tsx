import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { LanguageSelect } from 'components';
import { TestRequest, TestRouter } from './components';
import { insertReducer } from '../../application/app-store';

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

const homePageReducer = {
    name: 'homePageReducer',
    reducer: (state: any) => ({ ...state, test: 'ok' }),
    rewritable: true
};
const injectedReducers = [homePageReducer];

export default insertReducer(injectedReducers)(HomePage);
