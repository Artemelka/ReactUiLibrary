export interface DropDownPanelProps {
    actionIcon?: {
        iconName: string;
        onClick: () => void;
    };
    darkColor?: boolean;
    emptyStyle?: boolean;
    onChange?: () => void;
    onlyBorder?: boolean;
    opened: boolean;
    openingByIcon?: boolean;
}

export interface DropDownPropsWithChildren extends DropDownPanelProps {
    children: Array<{[key: string]: any}>;
}

export interface DropDownSummaryProps {
    actionIcon?: {
        iconName: string;
        onClick: () => void;
    };
    className?: string;
    onChange?: () => void;
    opened?: boolean;
    openingByIcon?: boolean;
}

export interface DropDownDetailsProps {
    className?: string;
    opened?: boolean;
}
