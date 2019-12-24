import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Table } from '../../elements';
import { EditorModal } from '../modals';
import {
    localizationActiveLocaleSelector,
    localizationDictionarySelector,
    localizationIsLoadingSelector,
    localizationLabelsSelector,
    localizationLocalesSelector
} from '../../../services/localization';
import { LocalizationState } from '../../../services/localization/types';

export interface TranslateEditorProps {
    activeRow: Array<string>;
    dictionary: Record<string, Record<string, string>>;
    isLoading: boolean;
    labels: Record<string, string>;
    locale: string;
    locales: Array<string>;
    onCloseModal: () => void;
    onEditRow: (row: Array<string>) => void;
    onRemoveRow: (row: Array<string>) => void;
    opened: boolean;
}

export class TranslateEditorComponent extends Component<TranslateEditorProps> {
    render() {
        const {
            activeRow,
            dictionary,
            isLoading,
            labels,
            locale,
            locales,
            onCloseModal,
            onEditRow,
            onRemoveRow,
            opened
        } = this.props;
        const headerRow = [labels.key || 'key', ...locales];
        const rows = Object.keys(dictionary[locale]).map(key => [
            key,
            ...locales.map(locale => dictionary[locale][key])
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
                    title={labels.editor}
                />
            </Fragment>
        );
    }
}

export const TranslateEditor = connect((store: Record<string, any> & LocalizationState)  => ({
    dictionary: localizationDictionarySelector(store),
    labels: localizationLabelsSelector(store),
    locale: localizationActiveLocaleSelector(store),
    locales: localizationLocalesSelector(store),
    isLoading: localizationIsLoadingSelector(store)
}))(TranslateEditorComponent);
