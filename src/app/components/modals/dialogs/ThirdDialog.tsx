import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { ModalModule } from '../../../elements';
import { translate } from '../../../../services/translate';
import { ModalDialogName } from '../dialogs/constants';
import { modalHOC } from '../modalsHOC';
import { ButtonShowModal } from '../button-show-modal';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalDialog, ModalSize } = ModalModule;

export class ThirdDialogComponent extends Component<ModalWithHocProps & RouteComponentProps> {
    render() {
        const { onClose, modalsUrl } = this.props;

        return (
            <ModalDialog
                onClose={onClose}
                opened={modalsUrl.includes(ModalDialogName.THIRD)}
                size={ModalSize.SMALL}
                title={translate('third-modal-window')}
            >
                Content
                <br/><br/><br/>
                <ButtonShowModal
                    label={translate('show-first-modal')}
                    modalName={ModalDialogName.FIRST}
                />
                <br/><br/><br/>
                <ButtonShowModal
                    label={translate('show-second-modal')}
                    modalName={ModalDialogName.SECOND}
                />
            </ModalDialog>
        );
    }
}

export const ThirdDialog = modalHOC(ThirdDialogComponent);
