export interface TableProps {
    headerRow: Array<string>;
    onRowClick?: (columns: Array<string>) => void;
    onRemoveRow?: (columns: Array<string>) => void;
    rows: Array<Array<string>>;
}

export interface TableRowProps {
    columns: Array<string>;
    editable?: boolean;
    header?: boolean;
    onClick?: (columns: Array<string>) => void;
    onRemove?: (columns: Array<string>) => void;
}
