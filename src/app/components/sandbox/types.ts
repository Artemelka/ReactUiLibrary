import { ComponentType } from 'react';

export interface SandboxBlockProps {
    children: any;
}
export interface SandboxContainerProps {
    acceptedParameters?: ComponentType;
    acceptedParametersProps?: {[key: string]: any};
    description: string;
    example: ComponentType;
    name: string;
    view: ComponentType;
}
export interface SandboxItemProps extends SandboxBlockProps {
    bgWhite?: boolean;
    inline?: boolean;
}
