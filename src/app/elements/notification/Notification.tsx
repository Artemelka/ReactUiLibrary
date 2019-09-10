import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { IconModule } from '../icon';
import { Text } from '../text';
import { Button } from '../buttons/Button';
import { NotificationType } from './constants';
import { NotificationProps } from './types';

const style = require('./Notification.less');
const cn = classNames.bind(style);
const { Icon, IconNames } = IconModule;

export class Notification extends Component<NotificationProps> {
    render() {
        const { elementRef, onClose, message, title, type } = this.props;

        return (
            <div
                className={cn('Notification', {
                    'Notification--error': type === NotificationType.ERROR,
                    'Notification--success': type === NotificationType.SUCCESS,
                    'Notification--warning': type === NotificationType.WARNING
                })}
                ref={elementRef}
            >
                <div className={cn('Notification__header')}>
                    <div className={cn('Notification__icon')}>
                        <Icon name={IconNames[type]} />
                    </div>
                    <div className={cn('Notification__title')}>
                        <Text.Paragraph bold>{title}</Text.Paragraph>
                    </div>
                    <div className={cn('Notification__button-close')}>
                        <Button.Icon onClick={onClose} iconName={IconNames.CLOSE}/>
                    </div>
                </div>
                <div className={cn('Notification__message')}>
                    <Text.Paragraph>{message}</Text.Paragraph>
                </div>
            </div>
        );
    }
}
