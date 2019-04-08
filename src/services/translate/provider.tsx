import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDictionary } from './actions';
import dictionary from '../../app/dictionary.json';

interface Props {
    addDictionary?: (dictionary: {[key: string]: any}) => void;
    locale?: string;
}

@(connect(
    (state: {[key: string]: any}) => ({locale: state.translateDictionary.locale}),
    {
        addDictionary
    }
) as any)
export class TranslateProvider extends Component<Props> {
    constructor(props: Props) {
        super(props);

        props.addDictionary(dictionary);
    }

    render() {
        const { children, locale } = this.props;

        return (
            <div key={locale}>{children}</div>
        );
    }
}
