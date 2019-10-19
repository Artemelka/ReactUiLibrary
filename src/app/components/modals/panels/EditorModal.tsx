import React, { Component, createRef, RefObject, SyntheticEvent, Fragment } from 'react';
import { Button, ModalModule } from '../../../elements';
import { EditorFormField } from '../../editor-form-fields/EditorFormField';
import { translate } from '../../../../services/translate';
import { getUniqId } from '../../../../services/utils/uniq-id';

const { ModalPanel, ModalSize } = ModalModule;
const INPUT_UID = getUniqId();

interface EditorModalProps {
    editRowData: Array<string>;
    fieldLabels: Array<string>;
    onClose: () => void;
    opened: boolean;
}

const validationTranslateEditorFields = (formData: { [key: string]: any }): boolean => {
    const fieldsValues = Object.values(formData);
    const result = fieldsValues.map(value => Boolean(value)).filter(Boolean);

    console.log('=== result ===', result);
    return fieldsValues.length === result.length;
};

export class EditorModal extends Component<EditorModalProps, { [key: string]: string | boolean }> {
    constructor(props: EditorModalProps) {
        super(props);
        const { fieldLabels, editRowData } = props;
        const initialState = fieldLabels.reduce(
            (acc, fieldName, index) => ({ ...acc, [fieldName]: editRowData[index] }), {});

        this.state = {
            ...initialState,
            disableButton: true
        };
    }

    checkButtonStatus = () => {
        const { disableButton, ...restState } = this.state;

        if (disableButton && validationTranslateEditorFields(restState)) {
            this.setState({disableButton: false});
        }

        if (!(disableButton || validationTranslateEditorFields(restState))) {
            this.setState({disableButton: true});
        }
    };

    handleChange = (value: string, name: string) => this.setState({ [name]: value }, this.checkButtonStatus);

    handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { disableButton, ...restState } = this.state;

        if (validationTranslateEditorFields(restState)) {
            console.log('=== go!! ===');
        }
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
                            disabled={this.state.disableButton}
                            label={'submit'}
                            type="submit"
                        />
                    </div>
                </form>
            </ModalPanel>
        );
    }
}
