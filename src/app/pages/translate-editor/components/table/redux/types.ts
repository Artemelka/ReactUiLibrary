import { TextInputProps } from '../../../../../elements/inputs/input/types';
import { TextareaContainerProps } from '../../../../../elements/inputs/textarea/types';

export interface EditorFormProps {
    editRowData: Record<string, string>;
    fieldLabels: Array<string>;
    labels: Record<string, string>;
    onSubmit: (values: Record<string, string>) => void;
}

export interface EditorModalProps {
    editRowData: Record<string, string>;
    fieldLabels: Array<string>;
    onClose: () => void;
    opened: boolean;
    title: string;
}

export interface EditorTableProps {
    getDictionary: () => void;
    headerRow: Array<string>;
    isLoading: boolean;
    onEditRow: (row: Record<string, string>) => void;
    onRemoveRow: (row: Array<string>) => void;
    rows: Array<Array<string>>;
}

export type EditorFormFieldProps = (TextInputProps | TextareaContainerProps);
