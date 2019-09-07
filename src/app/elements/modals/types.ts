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

export type ModalWithHocProps = {
    onClose?: () => void,
    modalsUrl: Array<string>
};

export interface ModalPortalAdapterProps {
    children: any;
    opened: boolean;
}
export type ModalPortalAdapterState = {
    opened: boolean
};
