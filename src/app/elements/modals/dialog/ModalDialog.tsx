import React, { Component } from 'react';
import { Overlay } from '../../overlay';
import { ModalPortalAdapter } from '../portal-adapter/ModalPortalAdapter';
import { ModalContainer } from '../container/ModalContainer';
import { ModalDialogProps } from '../types';

export class ModalDialog extends Component<ModalDialogProps> {
    render() {
        const { children, onClose, opened, size, title } = this.props;

        return (
            <ModalPortalAdapter opened={opened}>
                {() => (
                    <Overlay show>
                        <ModalContainer
                            size={size}
                            title={title}
                            onClose={onClose}
                        >
                            {children}
                        </ModalContainer>
                    </Overlay>
                )}
            </ModalPortalAdapter>
        );
    }
}
