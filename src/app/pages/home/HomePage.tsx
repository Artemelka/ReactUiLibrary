import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { LanguageSelect } from '../../components';
import { TestModals, TestRequest, TestRouter } from './components';

const style = require('./home.less');
const cn = classNames.bind(style);

class HomePage extends Component {
    render() {
        return (
            <div className={cn('Test-page')}>
                <h1>Test page</h1>
                <h3>Test request</h3>
                <div className={cn('Test-page__item')}>
                    <TestRequest/>
                </div>
                <h3>Test router</h3>
                <div className={cn('Test-page__item')}>
                    <TestRouter />
                </div>
                <h3>Test Change language</h3>
                <div className={cn('Test-page__item')}>
                    <LanguageSelect/>
                </div>
                <h3>Test modals</h3>
                <div className={cn('Test-page__item')}>
                    <TestModals/>
                </div>
            </div>
        );
    }
}

export default HomePage;
