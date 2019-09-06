import React, { Component } from 'react';
import { translate } from '../../../services/translate';
import { Button, ModalModule } from '../../elements';
import { ModalDialogProps } from '../../elements/modals/types';

const { ModalPanel } = ModalModule;

export class SecondPanelComponent extends Component<ModalDialogProps> {
    render() {
        return (
            <ModalPanel
                opened
                title={translate('second-modal-panel')}
            >
                Content
                <br/><br/><br/>
                <Button
                    onClick={this.props.onClose}
                    label={translate('close')}
                />
            </ModalPanel>
        );
    }
}
