import React, { Component } from 'react';
import { ModalModule } from '../../../elements';
import { translate } from '../../../../services/translate';
import { modalHOC } from '../modalsHOC';
import { ModalPanelName } from '../panels/constants';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalPanel, ModalSize } = ModalModule;

export class ThirdPanelComponent extends Component<ModalWithHocProps> {
    render() {
        const { onClose, modalsUrl } = this.props;

        return (
            <ModalPanel
                onClose={onClose}
                opened={modalsUrl.includes(ModalPanelName.THIRD)}
                size={ModalSize.SMALL}
                title={translate('third-modal-panel')}
            >
                Content
            </ModalPanel>
        );
    }
}

export const ThirdPanel = modalHOC(ThirdPanelComponent);
