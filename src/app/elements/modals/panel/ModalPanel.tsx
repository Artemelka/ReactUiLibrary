import React, { Component } from 'react';
import { Overlay } from '../../overlay';
import { ModalContainer } from '../container/ModalContainer';
import { ModalPortalAdapter } from '../portal-adapter/ModalPortalAdapter';
import { ModalDialogProps } from '../types';

type ChildrenProps = {
    onCreateRef: (ref: HTMLDivElement) => void
};

export class ModalPanel extends Component<ModalDialogProps> {
    render() {
        const { children, onClose, opened, size, title } = this.props;

        return (
            <ModalPortalAdapter opened={opened}>
                {({ onCreateRef }: ChildrenProps) => (
                    <Overlay show>
                        <ModalContainer
                            onClose={onClose}
                            onCreateRef={onCreateRef}
                            panelMode
                            size={size}
                            title={title}
                        >
                            {children}
                        </ModalContainer>
                    </Overlay>
                )}
            </ModalPortalAdapter>
        );
    }
}
