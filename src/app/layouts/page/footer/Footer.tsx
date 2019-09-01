import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classNames from 'classnames/bind';
import { Anchor, Select } from '../../../elements';
import { changeLocale, TranslateComponent, translateLocaleSelector, DictionaryStore } from '../../../../services/translate';
import { PROJECT_LINK, HOME_URL } from '../../../constants';
import { SELECT_WIDTH, selectOptions } from './constants';
import { getTranslatedOptions } from './utils';
import { FooterProps } from '../types';

const style = require('./Footer.less');
const cn = classNames.bind(style);

export class FooterComponent extends Component<FooterProps> {
    handleClick = () => this.props.history.push(HOME_URL);

    handleLanguageChange = (value: string) => this.props.changeLocale(value);

    render() {
        const { children, locale } = this.props;

        return (
            <footer className={cn('Footer')}>
                <div className={cn('Footer__aside')}>
                    <Anchor href={PROJECT_LINK} newPage>
                        <TranslateComponent translateKey={'link-project'}/>
                    </Anchor>
                    <Anchor onClick={this.handleClick}>
                        <TranslateComponent translateKey={'go-to-home'} />
                    </Anchor>
                </div>
                <div className={cn('Footer__main')}>
                    <div className={cn('Footer__content')}>
                        {children}
                    </div>
                    <div className={cn('Footer__select')}>
                        <Select
                            id="footer-select"
                            listOpenTop
                            name="footer-select"
                            onChange={this.handleLanguageChange}
                            options={getTranslatedOptions(selectOptions)}
                            value={locale}
                            inputWidth={SELECT_WIDTH}
                        />
                    </div>
                </div>
            </footer>
        );
    }
}

export const Footer = connect(
    (state: DictionaryStore) => ({ locale: translateLocaleSelector(state) }),
    { changeLocale }
)(withRouter(FooterComponent));
