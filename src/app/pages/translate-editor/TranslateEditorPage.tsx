import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Button, IconModule, Text } from '../../elements';
import { TranslateEditor } from '../../components';
import { translate } from '../../../services/translate';
import style from './TranslateEditorPage.less';

const cn = classNames.bind(style);

export type TranslateEditorPageState = {
    activeRow: Array<string>,
    opened: boolean
};

export default class TranslateEditorPage extends Component<null, TranslateEditorPageState> {
    state = {
        activeRow: [''],
        opened: false
    };

    handleCloseModal = () => this.setState({opened: false});

    handleRemoveRow = (rowData: Array<string>) => console.log('handleRemoveRow', rowData);

    handleEditRow = (rowData: Array<string>) => this.setState({ activeRow: rowData, opened: true});

    handleAddKey = () => this.setState({ activeRow: [''], opened: true});

    render() {
        const { activeRow, opened } = this.state;

        return (
            <div className={cn('Translate-editor-page')}>
                <Text.H1 >Translate editor</Text.H1>
                <div className={cn('Translate-editor-page__action-bar')}>
                    <Button.IconLabel
                        iconName={IconModule.IconNames.PLUS}
                        label={translate('add-key')}
                        onClick={this.handleAddKey}
                    />
                </div>
                <TranslateEditor
                    activeRow={activeRow}
                    onCloseModal={this.handleCloseModal}
                    onRemoveRow={this.handleRemoveRow}
                    onEditRow={this.handleEditRow}
                    opened={opened}
                />
            </div>
        );
    }
}
