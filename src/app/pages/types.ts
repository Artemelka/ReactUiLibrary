import { ComponentType } from 'react';

export interface RouteProps {
    component: ComponentType;
    exact?: boolean;
    path: string;
}
