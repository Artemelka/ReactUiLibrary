import React, { Component } from 'react';
import { Button, ModalModule } from '../../elements';
import { translate } from '../../../services/translate';
import { ModalDialogProps } from '../../elements/modals/types';

const { ModalDialog, ModalSize } = ModalModule;

export class FirstDialogComponent extends Component<ModalDialogProps> {
    render() {
        return (
            <ModalDialog
                opened
                size={ModalSize.LARGE}
                title={translate('first-modal-window')}
            >
                Content
                <br/><br/><br/>
                <Button
                    onClick={this.props.onClose}
                    label={translate('close')}
                />
            </ModalDialog>
        );
    }
}
