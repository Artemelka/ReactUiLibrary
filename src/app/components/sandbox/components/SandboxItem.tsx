import React from 'react';
import { cn } from '../SandboxLayout';
import { SandboxItemProps } from '../types';

export const SandboxItem = ({bgWhite, inline, children}: SandboxItemProps) => (
    <div
        className={cn('Sandbox__item', {
            'Sandbox__item--bg-white': bgWhite,
            'Sandbox__item--inline': inline
        })}
    >
        {children}
    </div>
);
