import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

type DictionaryData = {[key: string]: any};
type Store = {[key: string]: any};
export interface TranslateProps {
    dictionary?: DictionaryData;
    locale?: string;
    maxSymbol?: number;
    translateKey: string;
}

export class TranslateComponent extends Component<TranslateProps> {
    render() {
        const { dictionary, locale = 'en', maxSymbol, translateKey } = this.props;
        const translatedText: string = dictionary[locale][translateKey];
        const formattedText: string = translatedText && maxSymbol
            ? `${translatedText.slice(0, maxSymbol)}...`
            : translatedText;

        return <Fragment key={locale}>{formattedText || translateKey}</Fragment>;
    }
}

export const translate = (dictionary: DictionaryData) => connect(
    (state: Store) => ({
        dictionary,
        locale: state.translateDictionary.locale
    })
)(TranslateComponent);
