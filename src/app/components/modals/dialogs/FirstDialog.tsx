import React, { Component } from 'react';
import { Button, ModalModule } from '../../../elements';
import { translate } from '../../../../services/translate';
import { modalHOC } from '../modalsHOC';
import { ModalDialogName } from '../dialogs/constants';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalDialog, ModalSize } = ModalModule;

export class FirstDialogComponent extends Component<ModalWithHocProps> {
    render() {
        const { onClose, modalsUrl } = this.props;

        return (
            <ModalDialog
                opened={modalsUrl.includes(ModalDialogName.FIRST)}
                size={ModalSize.LARGE}
                title={translate('first-modal-window')}
            >
                Content
                <br/><br/><br/>
                <Button
                    onClick={onClose}
                    label={translate('close')}
                />
            </ModalDialog>
        );
    }
}

export const FirstDialog = modalHOC(FirstDialogComponent);
