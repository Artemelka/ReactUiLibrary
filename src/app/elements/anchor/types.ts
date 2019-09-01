import { ReactElement, RefObject, SyntheticEvent } from 'react';

export interface AnchorProps {
    active?: boolean;
    anchorRef?: RefObject<HTMLAnchorElement>;
    children?: string | ReactElement;
    disabled?: boolean;
    href?: string;
    newPage?: boolean;
    onClick?: (event: SyntheticEvent) => void;
}
export interface CustomEvent extends SyntheticEvent {
    keyCode: number;
    which: number;
}
