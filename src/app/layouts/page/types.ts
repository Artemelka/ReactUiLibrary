import { RouteComponentProps } from 'react-router';

export interface MainProps {
    fullWidth?: boolean;
    withoutHeader?: boolean;
}

export interface FooterProps extends RouteComponentProps {
    changeLocale?: (locale: string) => void;
    locale?: string;
}

export interface AsideProps {
    footerText?: string;
    heading: string;
    withoutHeader?: boolean;
}
