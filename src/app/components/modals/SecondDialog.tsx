import React, { Component } from 'react';
import { ModalModule } from '../../elements';
import { translate } from '../../../services/translate';
import { ModalDialogProps } from '../../elements/modals/types';

const { ModalDialog } = ModalModule;

export class SecondDialogComponent extends Component<ModalDialogProps> {
    render() {
        return (
            <ModalDialog
                onClose={this.props.onClose}
                opened
                title={translate('second-modal-window')}
            >
                Content
            </ModalDialog>
        );
    }
}
