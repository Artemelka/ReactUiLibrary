import { RefObject } from 'react';

export type NotificationBaseProps = {
    message?: string;
    title: string;
    type: 'ERROR' | 'WARNING' | 'SUCCESS';
};

export type NotificationRootState = {
    notifications: Array<NotificationBaseProps>,
    prevNotification: Array<NotificationBaseProps>
};

export interface NotificationContainerProps {
    delay?: number;
    item: NotificationBaseProps;
    removeNotification: (item: NotificationBaseProps) => void;
}

export interface NotificationProps extends NotificationBaseProps {
    elementRef?: RefObject<HTMLDivElement>;
    onClose: () => void;
}

export interface NotificationRootProps {
    notifications: Array<NotificationBaseProps>;
    timeout?: number;
}
