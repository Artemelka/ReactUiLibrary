import React, { Component, createRef, RefObject } from 'react';
import { Notification } from '../Notification';
import { NotificationContainerProps } from '../types';
import { NOTIFICATION_DELAY } from '../constants';

export class NotificationContainer extends Component<NotificationContainerProps> {
    componentDidMount(): void {
        const { delay = NOTIFICATION_DELAY } = this.props;

        if (this.ref.current) {
            this.timeoutId = setTimeout(() => {
                this.ref.current.style.transform = 'translateY(0)';
                setTimeout(this.hideNotification, 500 + delay);
            }, 500);
        }


    }

    componentWillUnmount(): void {
        clearInterval(this.timeoutId);
    }

    timeoutId: NodeJS.Timer;
    ref: RefObject<HTMLDivElement> = createRef();

    hideNotification = () => {
        const { item, removeNotification } = this.props;

        this.ref.current.style.transform = 'translateX(500px)';
        setTimeout(() => removeNotification(item), 700);
    };

    render() {
        const { item: { message, title, type } } = this.props;

        return (
            <Notification
                elementRef={this.ref}
                onClose={this.hideNotification}
                message={message}
                title={title}
                type={type}
            />
        );
    }
}
