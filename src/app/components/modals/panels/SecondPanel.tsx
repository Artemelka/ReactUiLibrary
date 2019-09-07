import React, { Component } from 'react';
import { Button, ModalModule } from '../../../elements';
import { translate } from '../../../../services/translate';
import { modalHOC } from '../modalsHOC';
import { ModalPanelName } from '../panels/constants';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalPanel } = ModalModule;

export class SecondPanelComponent extends Component<ModalWithHocProps> {
    render() {
        const { onClose, modalsUrl } = this.props;

        return (
            <ModalPanel
                opened={modalsUrl.includes(ModalPanelName.SECOND)}
                title={translate('second-modal-panel')}
            >
                Content
                <br/><br/><br/>
                <Button
                    onClick={onClose}
                    label={translate('close')}
                />
            </ModalPanel>
        );
    }
}

export const SecondPanel = modalHOC(SecondPanelComponent);
