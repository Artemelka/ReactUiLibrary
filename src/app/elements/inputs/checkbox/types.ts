export interface CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    id: string;
    indeterminate?: boolean;
    name: string;
    onChange?: () => void;
    onCreateRef?: (ref: HTMLInputElement) => void;
    radio?: boolean;
    toggle?: boolean;
}

export interface CheckboxState {
    isActive: boolean;
}
