import React, { Component } from 'react';
import { Button, ButtonsGroup } from '../../../elements';
import { getPostConfig, requestWrapper, requestGetParams } from '../utils';

const USER_PARAMS = 'name=tim';
const TRANSLATE_URL = '/api/translate';
const testDictionaryCollections = {
    ['test-RU']: {
        testKey: 'тест ключ',
        first: 'первый',
        second: 'второй'
    },
    ['test-EN']: {
        testKey: 'test-key',
        first: 'first',
        second: 'second'
    },
};
const newKeyData = [{
    keyName: 'key-test-add',
    locales: {
        ['test-RU']: 'тест ру',
        ['test-EN']: 'test en',
        ['ru-RU']: 'ру',
        ['en-EN']: 'en'
    }
}];
const updateKeyData = [{
    keyName: 'key-test-add',
    locales: {
        ['test-RU']: 'тест ру update 3',
        ['test-EN']: 'test en update 3',
        ['ru-RU']: 'ру update 3',
        ['en-EN']: 'en update 3'
    }
}];
const changeLocale = {
    _id: '5d88ccebb1195b4ccccac4f6',
    enabled: false,
    name: 'test-RU'
};

export class TestRequest extends Component {
    handleRequestGet = () => requestWrapper(requestGetParams, USER_PARAMS);

    handleRequestErrorGet = () => requestWrapper(requestGetParams);

    handleRequestPost = () => requestWrapper(getPostConfig('Tim'));

    handleRequestErrorPost = () => requestWrapper(getPostConfig(''));

    handleAddDictionary = () => requestWrapper({
        url: `${TRANSLATE_URL}/dictionary`,
        config: {
            data: testDictionaryCollections,
            method: 'POST'
        }
    });

    handleAddDictionaryKey = () => requestWrapper({
        url: `${TRANSLATE_URL}/key`,
        config: {
            data: {
                keys: newKeyData
            },
            method: 'POST'
        }
    });

    handleUpdateDictionaryKey = () => requestWrapper({
        url: `${TRANSLATE_URL}/key`,
        config: {
            data: {
                keys: updateKeyData
            },
            method: 'PUT'
        }
    });

    handleGetLocale = () => requestWrapper({
        url: `${TRANSLATE_URL}/locales`,
        config: {
            data: {},
            method: 'GET'
        }
    });

    handleChangeLocale = () => requestWrapper({
        url: `${TRANSLATE_URL}/locales`,
        config: {
            data: changeLocale,
            method: 'PUT'
        }
    });

    render() {
        return (
            <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                <Button
                    onClick={this.handleRequestGet}
                    label="REQUEST GET"
                />
                <Button
                    onClick={this.handleRequestErrorGet}
                    label="REQUEST GET ERROR"
                />
                <Button
                    onClick={this.handleRequestPost}
                    label="REQUEST POST"
                />
                <Button
                    onClick={this.handleRequestErrorPost}
                    label="REQUEST POST ERROR"
                />
                <Button
                    onClick={this.handleAddDictionary}
                    label="ADD DICTIONARY"
                    disabled
                />
                <Button
                    onClick={this.handleAddDictionaryKey}
                    label="ADD DICTIONARY KEY"
                    disabled
                />
                <Button
                    onClick={this.handleUpdateDictionaryKey}
                    label="UPDATE DICTIONARY KEY"
                    disabled
                />
                <Button
                    onClick={this.handleGetLocale}
                    label="GET LOCALE"
                    // disabled
                />
                <Button
                    onClick={this.handleChangeLocale}
                    label="CHANGE LOCALE"
                    // disabled
                />
            </ButtonsGroup.Component>
        );
    }
}
