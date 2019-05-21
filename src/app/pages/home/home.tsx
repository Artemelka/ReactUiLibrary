import React, { Component } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Button, Select } from '../../elements';
import { changeLocale, translate } from '../../../services/translate';
import { getPostConfig, requestWrapper, requestGetParams } from './utils';
import { TranslateState } from '../../../services/translate/reducer';

const style = require('./home.less');
const cn = classNames.bind(style);

interface AppPropsType {
    changeLocale: (locale: string) => (dispatch: Dispatch) => void;
    routing: any;
    translateDictionary: TranslateState;
}
interface MapStateType {
    translateDictionary: TranslateState;
}
interface Buttons {
    onClick: () => void;
    label: string;
}

const USER_PARAMS = 'name=tim';
const buttonRequestSettings = [
    {
        onClick: () => requestWrapper(requestGetParams, USER_PARAMS),
        label: 'REQUEST GET'
    }, {
        onClick: () => requestWrapper(requestGetParams),
        label: 'REQUEST GET ERROR'
    }, {
        onClick: () => requestWrapper(getPostConfig('Tim')),
        label: 'REQUEST POST'
    }, {
        onClick: () => requestWrapper(getPostConfig('')),
        label: 'REQUEST POST ERROR'
    }
];
const selectOptions = [
    {
        value: 'ru',
        title: 'russian-language'
    }, {
        value: 'en',
        title: 'english-language'
    }
];

@(connect(
    (state: MapStateType, routing) => ({
        routing,
        translateDictionary: state.translateDictionary
    }),
    {
        changeLocale
    }
) as any)
export class TestHomePage extends Component<AppPropsType> {
    handleLangChange = (value: string) => this.props.changeLocale(value);

    handleLinkClick = (method: string, url?: string) => () => this.props.routing.history[method](url);

    buttonLinkExample = [
        {
            onClick: this.handleLinkClick('push', '/library'),
            label: 'library'
        }, {
            onClick: this.handleLinkClick('push', '/layout'),
            label: 'layout'
        }, {
            onClick: this.handleLinkClick('goBack'),
            label: 'link-back'
        }
    ];

    renderButtons = (buttons: Array<Buttons>) => buttons.map(({onClick, label}: Buttons, index: number) => (
        <div className={cn('Test-page__button-wrapper')} key={index}>
            <Button onClick={onClick} label={translate(label)}/>
        </div>
    ));

    render() {
        const { translateDictionary: {locale} } = this.props;

        return (
            <div className={cn('Test-page')}>
                <h1>Test page</h1>
                <h3>Test request</h3>
                <div className={cn('Test-page__item')}>
                    {this.renderButtons(buttonRequestSettings)}
                </div>
                <h3>Test router</h3>
                <div className={cn('Test-page__item')}>
                    {this.renderButtons(this.buttonLinkExample)}
                </div>
                <h3>Test Change language</h3>
                <h4>language: {locale}</h4>
                <div className={cn('Test-page__item')}>
                    <Select
                        options={selectOptions}
                        value={locale}
                        onChange={this.handleLangChange}
                    />
                </div>
            </div>
        );
    }
}
