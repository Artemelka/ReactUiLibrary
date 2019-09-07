import React, { Component } from 'react';
import { ModalModule } from '../../../elements';
import { translate } from '../../../../services/translate';
import { modalHOC } from '../modalsHOC';
import { ModalDialogName } from '../dialogs/constants';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalDialog } = ModalModule;

export class SecondDialogComponent extends Component<ModalWithHocProps> {
    render() {
        const { onClose, modalsUrl } = this.props;

        return (
            <ModalDialog
                onClose={onClose}
                opened={modalsUrl.includes(ModalDialogName.SECOND)}
                title={translate('second-modal-window')}
            >
                Content
            </ModalDialog>
        );
    }
}

export const SecondDialog = modalHOC(SecondDialogComponent);
