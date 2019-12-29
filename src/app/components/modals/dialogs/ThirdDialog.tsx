import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { ModalModule } from '../../../elements';
import { ModalDialogName } from '../dialogs/constants';
import { modalHOC } from '../modalsHOC';
import { ButtonShowModal } from '../button-show-modal';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalDialog, ModalSize } = ModalModule;

export class ThirdDialogComponent extends Component<ModalWithHocProps & RouteComponentProps> {
    render() {
        const { label, onClose, modalsUrl, secondLabel, title } = this.props;

        return (
            <ModalDialog
                onClose={onClose}
                opened={modalsUrl.includes(ModalDialogName.THIRD)}
                size={ModalSize.SMALL}
                title={title}
            >
                Content
                <br/><br/><br/>
                <ButtonShowModal
                    label={label}
                    modalName={ModalDialogName.FIRST}
                />
                <br/><br/><br/>
                <ButtonShowModal
                    label={secondLabel}
                    modalName={ModalDialogName.SECOND}
                />
            </ModalDialog>
        );
    }
}

export const ThirdDialog = modalHOC(ThirdDialogComponent);
