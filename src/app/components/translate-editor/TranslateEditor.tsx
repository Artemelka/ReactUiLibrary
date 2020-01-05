import React, { Component, Fragment } from 'react';
import { Table } from '../../elements';
import { EditorModal } from '../modals';

export interface TranslateEditorProps {
    activeRow: Array<Record<string, string>>;
    getDictionary: () => void;
    headerRow: Array<string>;
    isLoading: boolean;
    labels: Record<string, string>;
    onCloseModal: () => void;
    onEditRow: (row: Array<Record<string, string>>) => void;
    onRemoveRow: (row: Array<string>) => void;
    opened: boolean;
    rows: Array<Array<string>>;
}

export class TranslateEditorComponent extends Component<TranslateEditorProps> {
    componentDidMount(): void {
        this.props.getDictionary();
    }

    render() {
        const {
            activeRow,
            isLoading,
            headerRow,
            labels,
            onCloseModal,
            onEditRow,
            onRemoveRow,
            opened,
            rows
        } = this.props;

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


