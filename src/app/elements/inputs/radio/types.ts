export interface SingleRadioButtonProps {
    checked: boolean;
    disabled?: boolean;
    id: string;
    name: string;
    label?: string;
    onChange?: (value: string) => void;
    value: string;
}
export interface RadioButtonsProps {
    column?: boolean;
    items: Array<SingleRadioButtonProps>;
    value: string;
    name: string;
    onChange?: (value: string) => void;
}
