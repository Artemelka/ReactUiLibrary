import React, { Component } from 'react';
import { Portal } from '../../index';
import { MODAL_ROOT, PAGE_MODAL_CONTAINER_CLASS_NAME } from '../../../constants';
import { ModalPortalAdapterProps, ModalPortalAdapterState } from '../types';

const modalRootElement = document.getElementById(MODAL_ROOT);

export class ModalPortalAdapter extends Component<ModalPortalAdapterProps, ModalPortalAdapterState> {
    static getDerivedStateFromProps(nextProps: Readonly<ModalPortalAdapterProps>) {
        return !nextProps.opened ? false : nextProps;
    }

    state = {
        opened: false
    };

    shouldComponentUpdate(nextProps: Readonly<ModalPortalAdapterProps>) {
        if (!nextProps.opened && nextProps.opened !== this.props.opened) {
            this.setClosingAnimation();
        }

        return true;
    }

    setClosingAnimation = () => {
        if (this.modalRef) {
            this.modalRef.style.transform = 'translate3d(100%, 0, 0)';
            setTimeout(() => {
                this.setState({ opened: false });
            }, 300);
        } else {
            this.setState({ opened: false });
        }
    };

    handleRef = (ref: HTMLDivElement) => { this.modalRef = ref; };
    modalRef: HTMLDivElement;

    render() {
        return (
            this.state.opened ? (
                <Portal
                    containerClassName={PAGE_MODAL_CONTAINER_CLASS_NAME}
                    rootElement={modalRootElement}
                >
                    {this.props.children({ onCreateRef: this.handleRef })}
                </Portal>
            ) : null
        );
    }
}
