import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table } from '../../elements';
import { EditorModal } from '../modals';
import {
    translate, translateDictionarySelector, translateLocaleSelector, translateLoaderSelector
} from '../../../services/translate';
import { Dictionary, DictionaryStore } from '../../../services/translate/types';

export interface TranslateEditorProps {
    activeRow: Array<string>;
    dictionary: Dictionary;
    isLoading: boolean;
    locale: string;
    onCloseModal: () => void;
    onRemoveRow: (row: Array<string>) => void;
    onEditRow: (row: Array<string>) => void;
    opened: boolean;
}

export class TranslateEditorComponent extends Component<TranslateEditorProps> {
    constructor(props: TranslateEditorProps) {
        super(props);
        this.locales = Object.keys(props.dictionary);
    }

    locales: Array<string>;

    render() {
        const { activeRow, dictionary, isLoading, locale, onCloseModal, onRemoveRow, onEditRow, opened } = this.props;
        const headerRow = [translate('key'), ...this.locales];
        const rows = Object.keys(dictionary[locale]).map(key => [
            key,
            ...this.locales.map(locale => dictionary[locale][key])
        ]);

        return (
            <Fragment>
                <Table
                    isLoading={isLoading}
                    headerRow={headerRow}
                    onEditRow={onEditRow}
                    onRemoveRow={onRemoveRow}
                    rows={rows}
                />
                <EditorModal
                    editRowData={activeRow}
                    fieldLabels={headerRow}
                    opened={opened}
                    onClose={onCloseModal}
                />
            </Fragment>
        );
    }
}

export const TranslateEditor = connect(
    (store: DictionaryStore)  => ({
        dictionary: translateDictionarySelector(store),
        locale: translateLocaleSelector(store),
        isLoading: translateLoaderSelector(store)
    })
)(TranslateEditorComponent);
