export type SideBarData = {[key: string]: any};

export type SideBarState = {
    withIndex: boolean;
};

export type MenuDropDownState = {
    opened: boolean;
};

export interface SideBarProps {
    items: Array<SideBarData>;
}

export interface SideBarListProps extends SideBarProps {
    indexPrefix?: string;
    nested?: boolean;
    withIndex: boolean;
}

export interface SideBarLinkProps {
    index?: string;
    name: string;
    url: string;
    push: (path: string) => void;
    pathname: string;
    withIndex?: boolean;
}

export interface ToggleProps {
    checked: boolean;
    labels: Record<string, string>;
    onChange: () => void;
}

export interface MenuDropDownProps {
    items: Array<SideBarData>;
    index: string;
    indexPrefix?: string;
    withIndex: boolean;
}
