import React, { Component } from 'react';
import { ModalModule } from '../../../elements';
import { modalHOC } from '../modalsHOC';
import { ModalDialogName } from '../dialogs/constants';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalDialog } = ModalModule;

export class SecondDialogComponent extends Component<ModalWithHocProps> {
    render() {
        const { onClose, modalsUrl, title } = this.props;

        return (
            <ModalDialog
                onClose={onClose}
                opened={modalsUrl.includes(ModalDialogName.SECOND)}
                title={title}
            >
                Content
            </ModalDialog>
        );
    }
}

export const SecondDialog = modalHOC(SecondDialogComponent);
