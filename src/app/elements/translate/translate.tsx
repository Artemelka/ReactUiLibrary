import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

type DictionaryData = {[key: string]: any};
type Store = {[key: string]: any};
export interface TranslateProps {
    dictionary?: DictionaryData;
    locale?: string;
    translateKey: string;
}

export class TranslateComponent extends Component<TranslateProps> {
    render() {
        const { dictionary, locale = 'en', translateKey } = this.props;
        const translatedText = dictionary[locale][translateKey];

        return <Fragment key={locale}>{translatedText || translateKey}</Fragment>;
    }
}

export const translate = (dictionary: DictionaryData) => connect(
    (state: Store) => ({
        dictionary,
        locale: state.translateDictionary.locale
    })
)(TranslateComponent);
