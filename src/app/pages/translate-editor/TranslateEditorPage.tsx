import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Button, IconModule, Text } from '../../elements';
import { EditorTable, EditorModal } from './components';
import style from './TranslateEditorPage.less';

const cn = classNames.bind(style);

interface TranslateEditorPageProps {
    labels: Record<string, string>;
}
type TranslateEditorPageState = {
    activeRow: Array<Record<string, string>>,
    opened: boolean
};

export class TranslateEditorPageComponent extends Component<TranslateEditorPageProps, TranslateEditorPageState> {
    state = {
        activeRow: [{}],
        opened: false
    };

    handleCloseModal = () => this.setState({ opened: false });

    handleRemoveRow = (rowData: Array<string>) => console.log('handleRemoveRow', rowData);

    handleEditRow = (rowData: Array<Record<string, string>>) => this.setState({ activeRow: rowData, opened: true});

    handleAddKey = () => this.setState(({ activeRow }) => ({
        activeRow: activeRow.map((fieldParams: Record<string, string>) => ({ [fieldParams.name]: '' })),
        opened: true
    }));

    render() {
        const { activeRow, opened } = this.state;
        const { labels } = this.props;

        return (
            <div className={cn('Translate-editor-page')}>
                <Text.H1>Translate editor</Text.H1>
                <div className={cn('Translate-editor-page__action-bar')}>
                    <Button.IconLabel
                        iconName={IconModule.IconNames.PLUS}
                        label={labels['add-key'] || 'add-key'}
                        onClick={this.handleAddKey}
                    />
                </div>
                <EditorTable
                    onEditRow={this.handleEditRow}
                    onRemoveRow={this.handleRemoveRow}
                />
                <EditorModal
                    editRowData={activeRow}
                    opened={opened}
                    onClose={this.handleCloseModal}
                    title={labels.editor}
                />
            </div>
        );
    }
}
