import { ComponentType } from 'react';
export interface MainProps {
    fullWidth?: boolean;
    withoutHeader?: boolean;
}

export interface FooterProps {
    footerAside?: ComponentType<any>;
    rightContent?: ComponentType<any>;
}

export interface AsideProps {
    footerText?: string;
    heading: string;
    withoutHeader?: boolean;
}
