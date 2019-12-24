import React, { Component } from 'react';
import { Button, ModalModule } from '../../../elements';
import { modalHOC } from '../modalsHOC';
import { ModalDialogName } from '../dialogs/constants';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalDialog, ModalSize } = ModalModule;

export class FirstDialogComponent extends Component<ModalWithHocProps> {
    render() {
        const { label, onClose, modalsUrl, title } = this.props;

        return (
            <ModalDialog
                opened={modalsUrl.includes(ModalDialogName.FIRST)}
                size={ModalSize.LARGE}
                title={title}
            >
                Content
                <br/><br/><br/>
                <Button
                    onClick={onClose}
                    label={label}
                />
            </ModalDialog>
        );
    }
}

export const FirstDialog = modalHOC(FirstDialogComponent);
