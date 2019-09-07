export interface NotificationProps {
    onClose: () => void;
    message?: string;
    title: string;
    type: 'ERROR' | 'WARNING' | 'SUCCESS';
}
