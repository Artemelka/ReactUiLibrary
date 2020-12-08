import React, { Component } from 'react';
import { ModalModule } from '../../../../elements';
import { EditorForm } from '../form/EditorForm';
import { EditorModalProps } from '../table/redux/types';

const { ModalPanel, ModalSize } = ModalModule;

export class EditorModal extends Component<EditorModalProps, { [key: string]: string | boolean }> {
    handleChange = (value: string, name: string) => this.setState({ [name]: value });

    handleSubmit = (values: Record<string, string>) => {
        console.log('=== submit ===', values);
    };

    render() {
        const { editRowData, fieldLabels, onClose, opened, title } = this.props;

        return (
            <ModalPanel
                onClose={onClose}
                opened={opened}
                size={ModalSize.SMALL}
                title={title}
            >
                <EditorForm
                    editRowData={editRowData}
                    fieldLabels={fieldLabels}
                    onSubmit={this.handleSubmit}
                />
            </ModalPanel>
        );
    }
}
