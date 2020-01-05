import React, { Component } from 'react';
import { ModalModule } from '../../../elements';
import { EditorForm } from '../../editor-form/EditorForm';

const { ModalPanel, ModalSize } = ModalModule;

interface EditorModalProps {
    editRowData: Array<Record<string, string>>;
    fieldLabels: Array<string>;
    onClose: () => void;
    opened: boolean;
    title: string;
}

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
