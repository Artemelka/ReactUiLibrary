import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { changeLocale, translate } from '../../../services/translate';
import { TranslateState } from '../../../services/translate/reducer';
import { getPostConfig, requestWrapper, requestGetParams } from './utils';
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
    handleLinkClick = (method: string, url?: string) => () => this.props.routing.history[method](url);

    buttonsLangExample = [
        {
            onClick: () => this.props.changeLocale('ru'),
            label: translate('russian-language')
        }, {
            onClick: () => this.props.changeLocale('en'),
            label: translate('english-language')
        }
    ];

    buttonLinkExample = [
        {
            onClick: this.handleLinkClick('push', '/library'),
            label: translate('library')
        }, {
            onClick: this.handleLinkClick('goBack'),
            label: translate('link-back')
        }
    ];

    renderButtons = (buttons: Array<Buttons>) => buttons.map(({onClick, label}: Buttons, index: number) => (
        <div className={classNames('Test-page__button-wrapper')} key={index}>
            <button onClick={onClick}>{label}</button>
        </div>
    ));

    render() {
        const { translateDictionary } = this.props;

        return (
            <div className={classNames('Test-page')}>
                <h1>Test page</h1>
                {this.renderButtons(buttonRequestSettings)}
                <br />
                <h2>Test router</h2>
                {this.renderButtons(this.buttonLinkExample)}
                <br />
                <h2>Change language</h2>
                <h3>language: {translateDictionary.locale}</h3>
                {this.renderButtons(this.buttonsLangExample)}
            </div>
        );
    }
}
