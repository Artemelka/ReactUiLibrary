import React, { Component, createRef, RefObject, SyntheticEvent, Fragment } from 'react';
import { Button, ModalModule, Input } from '../../../elements';
import { TextArea } from '../../../components';
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
    handleChange = (event: SyntheticEvent, val: string) => console.log('val', val);

    handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(this.form.current);
        console.log('=== submit ===', data.get('ru-RU'));
    };

    form: RefObject<HTMLFormElement> = createRef();

    render() {
        const { editRowData, fieldLabels, onClose, opened } = this.props;

        return (
            <ModalPanel
                onClose={onClose}
                opened={opened}
                size={ModalSize.SMALL}
                title={translate('editor')}
            >
                <form style={{padding: '30px'}} onSubmit={this.handleSubmit} ref={this.form}>
                    {
                        fieldLabels.map((value, index) => (
                            <Fragment key={`editor-${value}-${index}_${INPUT_UID}`}>
                                <label htmlFor={`editor-${value}-${index}_${INPUT_UID}`}>{value}</label>
                                {
                                    index === 0
                                        ? (
                                            <Input.Text
                                                value={editRowData[index] || ''}
                                                id={value}
                                                name={value}
                                            />
                                        ) : (
                                            <TextArea
                                                value={editRowData[index] || ''}
                                                id={value}
                                                onChange={this.handleChange}
                                                rows={4}
                                            />
                                        )
                                }
                            </Fragment>
                        ))
                    }
                    <div>
                        <Button label={'submit'} type="submit" />
                    </div>
                </form>
            </ModalPanel>
        );
    }
}
