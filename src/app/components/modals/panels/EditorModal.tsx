import React, { Component } from 'react';
import { ModalModule, Input, Textarea } from '../../../elements';
import { translate } from '../../../../services/translate';
import { getUniqId } from '../../../../services/utils/uniq-id';

const { ModalPanel, ModalSize } = ModalModule;

interface EditorModalProps {
    editRowData: Array<string>;
    fieldLabels: Array<string>;
    onClose: () => void;
    opened: boolean;
}

const INPUT_UID = getUniqId();

export class EditorModal extends Component<EditorModalProps> {
    render() {
        const { editRowData, fieldLabels, onClose, opened } = this.props;

        return (
            <ModalPanel
                onClose={onClose}
                opened={opened}
                size={ModalSize.SMALL}
                title={translate('editor')}
            >
                <div style={{padding: '30px'}}>
                    {
                        fieldLabels.map((value, index) => (
                            <div key={`editor-key-${index}_${INPUT_UID}`}>
                                <label htmlFor={`editor-key-${index}_${INPUT_UID}`}>{value}</label>
                                {
                                    index === 0
                                        ? <Input.Text value={editRowData[index] || ''} id={`editor-key-${index}`}/>
                                        : (
                                            <Textarea
                                                value={editRowData[index] || ''}
                                                id={`editor-key-${index}`}
                                                name="editor-locale"
                                                defaultErrorMessage="error"
                                            />
                                        )
                                }
                            </div>
                        ))
                    }
                </div>
            </ModalPanel>
        );
    }
}
