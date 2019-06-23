import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

type DictionaryData = {[key: string]: any};
type Store = {[key: string]: any};
interface Props {
    translateKey: string;
    locale: string;
}

export const translate = (dictionary: DictionaryData) => connect(
    (state: Store) => ({locale: state.translateDictionary.locale})
)(class TranslateComponent extends Component<Props> {
    render() {
        const { translateKey, locale } = this.props;
        const translatedText = dictionary[locale][translateKey];

        return (
            <Fragment key={locale}>{translatedText || translateKey}</Fragment>
        );
    }
});
