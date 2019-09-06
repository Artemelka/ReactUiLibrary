import React, { Component } from 'react';
import { ModalModule } from '../../elements';
import { translate } from '../../../services/translate';
import { ModalDialogProps } from '../../elements/modals/types';

const { ModalPanel, ModalSize } = ModalModule;

export class ThirdPanelComponent extends Component<ModalDialogProps> {
    render() {
        return (
            <ModalPanel
                onClose={this.props.onClose}
                opened
                size={ModalSize.SMALL}
                title={translate('third-modal-panel')}
            >
                Content
            </ModalPanel>
        );
    }
}
