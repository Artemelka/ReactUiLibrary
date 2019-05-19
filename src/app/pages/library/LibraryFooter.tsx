import React, { Component, SyntheticEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Select } from '../../elements';
import { changeLocale } from '../../../services/translate';
import { TranslateState } from '../../../services/translate/reducer';

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
    translateDictionary?: TranslateState;
}

@(connect(
    (state: {[key: string]: any}) => ({ translateDictionary: state.translateDictionary }),
    { changeLocale }
) as any)
export class LibraryFooter extends Component<Props> {
    handleLangChange = (value: string) => this.props.changeLocale(value);

    render() {
        return (
            <div style={{textAlign: 'right'}}>
                <Select
                    listOpenTop
                    onChange={this.handleLangChange}
                    options={selectOptions}
                    value={this.props.translateDictionary.locale}
                    inputWidth={70}
                />
            </div>
        );
    }
}
