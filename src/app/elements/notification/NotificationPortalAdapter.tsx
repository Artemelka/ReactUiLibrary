import React, { Component } from 'react';
import { Portal } from '../index';
import { NOTIFICATION_ROOT, PAGE_NOTIFICATION_CONTAINER_CLASS_NAME } from '../../constants';

const notificationRootElement = document.getElementById(NOTIFICATION_ROOT);

export class NotificationPortalAdapter extends Component {
    render() {
        return (
            <Portal
                containerClassName={PAGE_NOTIFICATION_CONTAINER_CLASS_NAME}
                rootElement={notificationRootElement}
            >
                {this.props.children}
            </Portal>
        );
    }
}
