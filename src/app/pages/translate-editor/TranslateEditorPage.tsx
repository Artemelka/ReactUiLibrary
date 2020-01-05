import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Button, IconModule, Text } from '../../elements';
import { LocalizationState } from '../../../services/localization/types';
import { localizationLabelsSelector } from '../../../services/localization';
import { TranslateEditor } from '../../components';
import style from './TranslateEditorPage.less';

const cn = classNames.bind(style);

type Props = { labels: Record<string, string> };
export type TranslateEditorPageState = {
    activeRow: Array<Record<string, string>>,
    opened: boolean
};

export  class TranslateEditorPage extends Component<Props, TranslateEditorPageState> {
    state = {
        activeRow: [{}],
        opened: false
    };

    handleCloseModal = () => this.setState({opened: false});

    handleRemoveRow = (rowData: Array<string>) => console.log('handleRemoveRow', rowData);

    handleEditRow = (rowData: Array<Record<string, string>>) => this.setState({ activeRow: rowData, opened: true});

    handleAddKey = () => this.setState({ activeRow: [{}], opened: true});

    render() {
        const { activeRow, opened } = this.state;

        return (
            <div className={cn('Translate-editor-page')}>
                <Text.H1 >Translate editor</Text.H1>
                <div className={cn('Translate-editor-page__action-bar')}>
                    <Button.IconLabel
                        iconName={IconModule.IconNames.PLUS}
                        label={this.props.labels['add-key'] || 'add-key'}
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

export default connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}))(TranslateEditorPage);
