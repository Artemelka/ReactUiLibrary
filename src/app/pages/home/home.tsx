import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import classNames from 'classnames/bind';
import { Button, Select } from '../../elements';
import { changeLocale, NavigatorLanguage, translateLocaleSelector, DictionaryStore } from '../../../services/translate';
import { getPostConfig, requestWrapper, requestGetParams } from './utils';

const style = require('./home.less');
const cn = classNames.bind(style);

interface AppPropsType extends RouteComponentProps {
    changeLocale: (locale: string) => void;
    locale: string;
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
        value: NavigatorLanguage.RU,
        title: 'russian-language'
    }, {
        value: NavigatorLanguage.EN,
        title: 'english-language'
    }
];

export class TestHomePageComponent extends Component<AppPropsType> {
    handleLangChange = (value: string) => this.props.changeLocale(value);

    handleLibraryClick = () => this.props.history.push('/library');

    handleLayoutClick = () => this.props.history.push('/layout');

    handleGoBackClick = () => this.props.history.goBack();

    buttonLinkExample = [
        {
            onClick: this.handleLibraryClick,
            label: 'library'
        }, {
            onClick: this.handleLayoutClick,
            label: 'layout'
        }, {
            onClick: this.handleGoBackClick,
            label: 'link-back'
        }
    ];

    renderButtons = (buttons: Array<Buttons>) => buttons.map(({onClick, label}: Buttons, index: number) => (
        <div className={cn('Test-page__button-wrapper')} key={index}>
            <Button
                onClick={onClick}
                label={label}
            />
        </div>
    ));

    render() {
        const { locale } = this.props;

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

export const TestHomePage = connect(
    (state: DictionaryStore, routing: RouteComponentProps) => ({
        ...routing,
        locale: translateLocaleSelector(state)
    }),
    {
        changeLocale
    }
)(TestHomePageComponent);
