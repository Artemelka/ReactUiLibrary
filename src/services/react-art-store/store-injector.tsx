import React, { useContext, useEffect, memo } from 'react';
import { StoreContext } from './context';
import { StoreContextValue, ArtStoreInjectorProps } from './types';

export const ArtStoreInjector = memo(({
    children,
    reducersToInject = [],
    sagasToInject = [],
    withRemove
}: ArtStoreInjectorProps) => {
    const {
        store: { injectReducers, injectSagas, removeReducers, removeSagas }
    } = useContext<StoreContextValue>(StoreContext);

    useEffect(() => {
        injectReducers(reducersToInject);
        injectSagas(sagasToInject);

        if (withRemove) {
            return () => {
                removeReducers(reducersToInject);
                removeSagas(sagasToInject);
            };
        }
    }, []);

    return <>{children}</>;
});
