import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from '../../elements';
import { changeLocale, translateLocaleSelector, DictionaryStore } from '../../../services/translate';
import { SELECT_WIDTH, selectOptions } from './constants';
import { getTranslatedOptions } from './utils';
import { LanguageSelectProps } from './types';

export class LanguageSelectComponent extends Component<LanguageSelectProps> {
    handleLanguageChange = (value: string) => this.props.changeLocale(value);

    render() {
        const { locale } = this.props;

        return (
            <Select
                id="footer-select"
                listOpenTop
                name="footer-select"
                onChange={this.handleLanguageChange}
                options={getTranslatedOptions(selectOptions)}
                value={locale}
                inputWidth={SELECT_WIDTH}
            />
        );
    }
}

export const LanguageSelect = connect(
    (state: DictionaryStore) => ({ locale: translateLocaleSelector(state) }),
    { changeLocale }
)(LanguageSelectComponent);
