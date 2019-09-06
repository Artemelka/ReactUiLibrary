import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Button, ModalModule } from '../../elements';
import { translate } from '../../../services/translate';
import { ModalName } from '../../modals';
import { ModalDialogProps } from '../../elements/modals/types';

const { ModalDialog, ModalSize } = ModalModule;

export class ThirdDialogComponent extends Component<ModalDialogProps & RouteComponentProps> {
    handleShowModal = (name: string) => () => {
        const { history, location: { pathname } } = this.props;

        history.push(`${pathname}/${name}`);
    };

    render() {
        return (
            <ModalDialog
                onClose={this.props.onClose}
                opened
                size={ModalSize.SMALL}
                title={translate('third-modal-window')}
            >
                Content
                <br/><br/><br/>
                <Button
                    onClick={this.handleShowModal(ModalName.FIRST)}
                    label={translate('show-first-modal')}
                />
                <br/><br/><br/>
                <Button
                    onClick={this.handleShowModal(ModalName.SECOND)}
                    label={translate('show-second-modal')}
                />
            </ModalDialog>
        );
    }
}
