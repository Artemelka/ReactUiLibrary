import React, { Component, SyntheticEvent, Fragment } from 'react';
import { Button, ModalModule } from '../../../elements';
import { EditorFormField } from '../../editor-form-fields/EditorFormField';
import { translate } from '../../../../services/translate';
import { getUniqId } from '../../../utils';

const { ModalPanel, ModalSize } = ModalModule;
const INPUT_UID = getUniqId();

interface EditorModalProps {
    editRowData: Array<string>;
    fieldLabels: Array<string>;
    onClose: () => void;
    opened: boolean;
}

export class EditorModal extends Component<EditorModalProps, { [key: string]: string | boolean }> {
    handleChange = (value: string, name: string) => this.setState({ [name]: value });

    handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('=== submit ===');
    };

    render() {
        const { editRowData, fieldLabels, onClose, opened } = this.props;

        return (
            <ModalPanel
                onClose={onClose}
                opened={opened}
                size={ModalSize.SMALL}
                title={translate('editor')}
            >
                <form style={{padding: '30px'}} onSubmit={this.handleSubmit}>
                    {
                        fieldLabels.map((value, index) => (
                            <Fragment key={`editor-${value}-${index}_${INPUT_UID}`}>
                                <label htmlFor={`editor-${value}-${index}_${INPUT_UID}`}>{value}</label>
                                    <EditorFormField
                                        value={editRowData[index] || ''}
                                        id={value}
                                        index={index}
                                        name={value}
                                        onChange={this.handleChange}
                                    />
                            </Fragment>
                        ))
                    }
                    <div>
                        <Button
                            disabled
                            label={'submit'}
                            type="submit"
                        />
                    </div>
                </form>
            </ModalPanel>
        );
    }
}
