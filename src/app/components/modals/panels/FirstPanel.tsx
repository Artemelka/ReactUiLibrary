import React, { Component } from 'react';
import { ModalModule, Input, Textarea } from '../../../elements';
import { ModalPanelName } from '../panels/constants';
import { modalHOC } from '../modalsHOC';
import { ModalWithHocProps } from '../../../elements/modals/types';

const { ModalPanel, ModalSize } = ModalModule;

export type FirstPanelData = {
    title: string,
    description: string
};
interface FirstPanelComponentProps extends ModalWithHocProps {
    modalData?: FirstPanelData;
}

export class FirstPanelComponent extends Component<FirstPanelComponentProps> {
    render() {
        const { modalData: { title: inputTitle = '', description = '' } = {}, onClose, modalsUrl, title } = this.props;

        return (
            <ModalPanel
                onClose={onClose}
                opened={modalsUrl.includes(ModalPanelName.FIRST)}
                size={ModalSize.LARGE}
                title={title}
            >
                <div style={{padding: '30px'}}>
                    <Input.Text value={inputTitle} id="first-panel-title" name="first-panel-title"/>
                    <br/>
                    <br/>
                    <br/>
                    <Textarea
                        value={description}
                        id="first-panel-description"
                        name="first-panel-description"
                        defaultErrorMessage="error"
                    />
                </div>
            </ModalPanel>
        );
    }
}

export const FirstPanel = modalHOC(FirstPanelComponent);
