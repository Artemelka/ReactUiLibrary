export type RadioButtonBaseProps = {
    disabled?: boolean;
    id: string;
    label?: string;
    value: string;
};

export interface SingleRadioButtonProps extends RadioButtonBaseProps {
    checked: boolean;
    name: string;
    onChange?: (value: string) => void;
}
export interface RadioButtonsProps {
    column?: boolean;
    items: Array<RadioButtonBaseProps>;
    value: string;
    name: string;
    onChange?: (value: string) => void;
}
