import React, { Component, createRef, RefObject } from 'react';
import classNames from 'classnames/bind';
import { Button, IconModule, Text } from '../../index';
import { ModalContainerProps } from '../types';

const style = require('./ModalContainer.less');
const cn = classNames.bind(style);
export const ModalSize = {
    SMALL: Symbol('small'),
    LARGE: Symbol('large')
};

export class ModalContainer extends Component<ModalContainerProps> {
    render() {
        const { children, onClose, onCreateRef, panelMode, size, title } = this.props;

        return (
            <div
                className={cn('Modal', {
                    'Modal--panel': panelMode,
                    'Modal--small': size === ModalSize.SMALL,
                    'Modal--large': size === ModalSize.LARGE,
                    'Modal--closed': false,
                    'Modal--open': true
                })}
                ref={onCreateRef}
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
        );
    }
}
