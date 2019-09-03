export interface ModalContainerProps {
    onClose?: () => void;
    onCreateRef?: (ref: HTMLDivElement) => void;
    panelMode?: boolean;
    size?: symbol;
    title: string;
}

export interface ModalDialogProps {
    onClose?: () => void;
    opened?: boolean;
    size?: symbol;
    title: string;
}
