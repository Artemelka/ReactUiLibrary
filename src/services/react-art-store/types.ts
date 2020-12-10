import { PropsWithChildren } from 'react';
import { ArtStore, InjectReducerParams, InjectSagaParams } from 'services';

export type StoreContextValue = {
    store?: ArtStore;
};

export type ArtStoreProviderProps = {
    store: ArtStore;
    children: any;
};

export type ArtStoreConnectParams = {
    mapStateToProps?: (state: Record<string, any>) => Record<string, any>;
    mapDispatchToProps?: Record<string, (payload: any) => Record<string, any>>;
};

export type ArtStoreInjectorProps = PropsWithChildren<{
    reducersToInject?: Array<InjectReducerParams>;
    sagasToInject?: Array<InjectSagaParams>;
    withRemove?: boolean;
}>;
