import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { TestRequest, TestRouter } from './components';
import { request } from '../../../services';

const style = require('./HomePage.less');
const cn = classNames.bind(style);

const newKeyData = [{
    keyName: 'key-test-add',
    locales: [
        {
            localeName: 'test-RU',
            value: 'тест ру'
        }, {
            localeName: 'te-EN',
            value: ' test en'
        }, {
            localeName: 'ru-RU',
            value: 'ру'
        }, {
            localeName: 'en-EN',
            value: 'en'
        }
    ]
}];

export default class HomePage extends Component {
    componentDidMount(): void {
        request('/api/translate/key', {
            method: 'POST',
            data: {
                keysData: newKeyData
            }
        })
            .then(data => console.log('response', data))
            .catch(error => console.error(error));
    }

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
                    <h3>Test ...</h3>
                    ...
                </div>
            </div>
        );
    }
}
