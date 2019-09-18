import React, { Component } from 'react';
import { Button, ButtonsGroup } from '../../../elements';
import { getPostConfig, requestWrapper, requestGetParams } from '../utils';

const USER_PARAMS = 'name=tim';

export class TestRequest extends Component {
    handleRequestGet = () => requestWrapper(requestGetParams, USER_PARAMS);

    handleRequestErrorGet = () => requestWrapper(requestGetParams);

    handleRequestPost = () => requestWrapper(getPostConfig('Tim'));

    handleRequestErrorPost = () => requestWrapper(getPostConfig(''));

    handleAddDictionary = () => requestWrapper({
        url: '/api/translate/dictionary',
        config: {
            data: { userName: ''},
            method: 'POST'
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
            </ButtonsGroup.Component>
        );
    }
}
