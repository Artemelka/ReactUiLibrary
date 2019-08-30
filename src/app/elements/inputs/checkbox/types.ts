export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    id: string;
    indeterminate?: boolean;
    name: string;
    onChange?: () => void;
    radio?: boolean;
    toggle?: boolean;
    withRef?: (ref: HTMLInputElement) => void;
}

export interface CheckboxState {
    isActive: boolean;
}
