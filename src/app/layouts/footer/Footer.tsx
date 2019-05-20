import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classNames from 'classnames/bind';
import { Anchor, Select } from '../../elements';
import { changeLocale, translate } from '../../../services/translate';
import { TranslateState } from '../../../services/translate/reducer';
import { Dispatch } from 'redux';

const style = require('./Footer.less');
const cn = classNames.bind(style);

export const PROJECT_LINK = 'https://github.com/Artemelka/ReactUiLibrary';
const HOME_URL = '/';
const SELECT_WIDTH = 70;
const selectOptions = [
    {
        value: 'ru',
        title: 'russian-language'
    }, {
        value: 'en',
        title: 'english-language'
    }
];

interface Props {
    changeLocale?: (locale: string) => (dispatch: Dispatch) => void;
    history?: {push: (url: string) => void};
    translateDictionary?: TranslateState;
}

@(withRouter as any)
@(connect(
    (state: {[key: string]: any}) => ({ translateDictionary: state.translateDictionary }),
    { changeLocale }
) as any)
export class Footer extends Component<Props> {
    handleClick = () => this.props.history.push(HOME_URL);

    handleLangChange = (value: string) => this.props.changeLocale(value);

    render() {
        return (
            <footer className={cn('Footer')}>
                <div className={cn('Footer__aside')}>
                    <Anchor href={PROJECT_LINK} newPage label={translate('link-project')} />
                    <Anchor label={translate('go-to-home')} onClick={this.handleClick}/>
                </div>
                <div className={cn('Footer__main')}>
                    <div className={cn('Footer__content')}>
                        {this.props.children}
                    </div>
                    <div className={cn('Footer__select')}>
                        <Select
                            listOpenTop
                            onChange={this.handleLangChange}
                            options={selectOptions}
                            value={this.props.translateDictionary.locale}
                            inputWidth={SELECT_WIDTH}
                        />
                    </div>
                </div>
            </footer>
        );
    }
}
