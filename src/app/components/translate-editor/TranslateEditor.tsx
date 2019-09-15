import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table } from '../../elements';
import { EditorModal } from '../modals';
import { translate, translateDictionarySelector, translateLocaleSelector } from '../../../services/translate';
import { Dictionary, DictionaryStore } from '../../../services/translate/types';

export interface TranslateEditorProps {
    dictionary: Dictionary;
    locale: string;
}
export type TranslateEditorState = {
    activeRow: Array<any>,
    opened: boolean
};

export class TranslateEditorComponent extends Component<TranslateEditorProps, TranslateEditorState> {
    constructor(props: TranslateEditorProps) {
        super(props);
        this.locales = Object.keys(props.dictionary);
        this.state = {
            activeRow: [],
            opened: false
        };
    }

    locales: Array<string>;

    handleCloseModal = () => this.setState({opened: false});

    handleRemoveRow = (row: Array<string>) => console.log('handleRemoveRow', row);

    handleRowClick = (rowData: Array<string>) => this.setState({ activeRow: rowData, opened: true});

    render() {
        const { activeRow, opened } = this.state;
        const { dictionary, locale } = this.props;
        const headerRow = [translate('key'), ...this.locales];
        const rows = Object.keys(dictionary[locale]).map(key => [
            key,
            ...this.locales.map(locale => dictionary[locale][key])
        ]);

        return (
            <Fragment>
                <Table
                    headerRow={headerRow}
                    onRowClick={this.handleRowClick}
                    onRemoveRow={this.handleRemoveRow}
                    rows={rows}
                />
                <EditorModal
                    editRowData={activeRow}
                    fieldLabels={headerRow}
                    opened={opened}
                    onClose={this.handleCloseModal}
                />
            </Fragment>
        );
    }
}

export const TranslateEditor = connect(
    (store: DictionaryStore)  => ({
        dictionary: translateDictionarySelector(store),
        locale: translateLocaleSelector(store)
    })
)(TranslateEditorComponent);
