export type SideBarData = {[key: string]: any};

export type SideBarState = {
    withIndex: boolean;
};

export interface SideBarProps {
    items: Array<SideBarData>;
}
