import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { changeLocale, translate } from '../../../services/translate';
import { TranslateState } from '../../../services/translate/reducer';
import { getPostConfig, requestWrapper, requestGetParams } from './utils';
import { Select } from '../../elements/inputs';
import './home.less';

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
export class TestHomePage extends React.Component<AppPropsType> {
    handleLangChange = (value: string) => this.props.changeLocale(value);

    handleLinkClick = (method: string, url?: string) => () => this.props.routing.history[method](url);

    buttonLinkExample = [
        {
            onClick: this.handleLinkClick('push', '/library'),
            label: 'library'
        }, {
            onClick: this.handleLinkClick('goBack'),
            label: 'link-back'
        }
    ];

    renderButtons = (buttons: Array<Buttons>) => buttons.map(({onClick, label}: Buttons, index: number) => (
        <div className={classNames('Test-page__button-wrapper')} key={index}>
            <button onClick={onClick}>{translate(label)}</button>
        </div>
    ));

    render() {
        const { translateDictionary: {locale} } = this.props;

        return (
            <div className={classNames('Test-page')}>
                <h1>Test page</h1>
                {this.renderButtons(buttonRequestSettings)}
                <br />
                <h2>Test router</h2>
                {this.renderButtons(this.buttonLinkExample)}
                <br />
                <h2>Change language</h2>
                <h3>language: {locale}</h3>
                <Select
                    options={selectOptions}
                    value={locale}
                    onChange={this.handleLangChange}
                />
            </div>
        );
    }
}
