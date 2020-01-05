export interface TableProps {
    isLoading?: boolean;
    headerRow: Array<string>;
    onEditRow?: (columns: Array<Record<string, string>>) => void;
    onRemoveRow?: (columns: Array<string>) => void;
    rows: Array<Array<string>>;
}

export interface TableRowProps {
    columns: Array<string>;
    editable?: boolean;
    header?: boolean;
    onEdit?: (columns: Array<string>) => void;
    onRemove?: (columns: Array<string>) => void;
}
