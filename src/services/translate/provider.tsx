import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { initializeDictionary } from './actions';
import { translateDictionarySelector, translateLocaleSelector } from './selectors';
import { DictionaryProviderProps, DictionaryStore } from './types';

class Provider extends Component<DictionaryProviderProps> {
    componentDidMount() {
        const { fetchDictionary, initializeDictionary, locale } = this.props;

        initializeDictionary(fetchDictionary, locale);
    }

    render() {
        const { children, locale, storeDictionary } = this.props;
        const key = `${locale}_${JSON.stringify(storeDictionary)}`;

        return <Fragment key={key}>{children}</Fragment>;
    }
}

export const TranslateProvider = connect(
    (state: DictionaryStore) => ({
        storeDictionary: translateDictionarySelector(state),
        locale: translateLocaleSelector(state)
    }),
    { initializeDictionary }
)(Provider);
