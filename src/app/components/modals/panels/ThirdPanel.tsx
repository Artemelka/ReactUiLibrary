import React, { Component } from 'react';
import { ModalModule } from '../../../elements';
import { modalHOC } from '../modalsHOC';
import { ModalPanelName } from '../panels/constants';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalPanel, ModalSize } = ModalModule;

export class ThirdPanelComponent extends Component<ModalWithHocProps> {
    render() {
        const { onClose, modalsUrl, title } = this.props;

        return (
            <ModalPanel
                onClose={onClose}
                opened={modalsUrl.includes(ModalPanelName.THIRD)}
                size={ModalSize.SMALL}
                title={title}
            >
                Content
            </ModalPanel>
        );
    }
}

export const ThirdPanel = modalHOC(ThirdPanelComponent);
