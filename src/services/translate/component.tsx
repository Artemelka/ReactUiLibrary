import React, { Component, Fragment } from 'react';
import { getTranslateState } from './store';
import { TranslateProps } from './types';

export class TranslateComponent extends Component<TranslateProps> {
    render() {
        const { translateKey } = this.props;
        const { dictionary, locale } = getTranslateState();
        const translatedText: string = dictionary[locale][translateKey];

        return <Fragment key={locale}>{translatedText || translateKey}</Fragment>;
    }
}
