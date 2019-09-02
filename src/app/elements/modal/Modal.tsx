import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Button, IconModule, Portal, Text } from '../index';
import { MODAL_ROOT, PAGE_MODAL_CONTAINER_CLASS_NAME } from '../../constants';

const style = require('./Modal.less');
const cn = classNames.bind(style);
const modalRootElement = document.getElementById(MODAL_ROOT);
export const ModalSize = {
    SMALL: Symbol('small'),
    LARGE: Symbol('large')
};

interface ModalProps {
    onClose?: () => void;
    opened?: boolean;
    size?: symbol;
    title: string;
}

export class Modal extends Component<ModalProps> {
    render() {
        const { children, onClose, opened, size, title } = this.props;

        return (
            opened ? (
                <Portal
                    containerClassName={PAGE_MODAL_CONTAINER_CLASS_NAME}
                    rootElement={modalRootElement}
                >
                    <div className={cn('Modal')}>
                        <div
                            className={cn('Modal__container', {
                                'Modal__container--small': size === ModalSize.SMALL,
                                'Modal__container--large': size === ModalSize.LARGE
                            })}
                        >
                            <div className={cn('Modal__header')}>
                                <div className={cn('Modal__title')}>
                                    <Text.H6>{title}</Text.H6>
                                </div>
                                {Boolean(onClose) &&
                                <div className={cn('Modal__button-close')}>
                                    <Button.Icon iconName={IconModule.IconNames.CLOSE} onClick={onClose}/>
                                </div>
                                }
                            </div>
                            <div className={cn('Modal__content')}>
                                {children}
                            </div>
                        </div>
                    </div>
                </Portal>
            ) : null
        );
    }
}
