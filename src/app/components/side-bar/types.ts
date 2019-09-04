import { RouteComponentProps } from 'react-router';

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

export interface SideBarLinkProps extends RouteComponentProps {
    index?: string;
    name: string;
    url: string;
    withIndex?: boolean;
}

export interface ToggleProps {
    checked: boolean;
    onChange: () => void;
}

export interface MenuDropDownProps extends RouteComponentProps {
    items: Array<SideBarData>;
    index: string;
    indexPrefix?: string;
    withIndex: boolean;
}
