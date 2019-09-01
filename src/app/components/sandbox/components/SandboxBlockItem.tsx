import React from 'react';
import { cn } from '../SandboxLayout';
import { SandboxBlockProps } from '../types';

export const SandboxBlockItems = ({children}: SandboxBlockProps) =>(
    <div className={cn('Sandbox__block-items')}>
        {children}
    </div>
);
