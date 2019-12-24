import React, { Component } from 'react';
import { Button, ModalModule } from '../../../elements';
import { modalHOC } from '../modalsHOC';
import { ModalPanelName } from '../panels/constants';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalPanel } = ModalModule;

export class SecondPanelComponent extends Component<ModalWithHocProps> {
    render() {
        const { label, onClose, modalsUrl, title } = this.props;

        return (
            <ModalPanel
                opened={modalsUrl.includes(ModalPanelName.SECOND)}
                title={title}
            >
                Content
                <br/><br/><br/>
                <Button
                    onClick={onClose}
                    label={label}
                />
            </ModalPanel>
        );
    }
}

export const SecondPanel = modalHOC(SecondPanelComponent);
