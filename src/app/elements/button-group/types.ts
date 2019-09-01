import { ReactNode } from 'react';

export interface ButtonGroupProps {
    children: Array<ReactNode>;
    round?: boolean;
    separatorSize?: Symbol;
}
