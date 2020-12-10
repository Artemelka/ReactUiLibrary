import React, { memo } from 'react';
import { StoreContext } from './context';
import { ArtStoreProviderProps } from './types';

export const ArtStoreProvider = memo(({ children, store }: ArtStoreProviderProps) => {
    return (
        <StoreContext.Provider value={{ store }}>
            {children}
        </StoreContext.Provider>
    );
});
