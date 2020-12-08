import React, { createContext, ComponentType, FC, useContext, useEffect, useState } from 'react';

const StoreContext = createContext({});

type ArtStoreProviderProps = {
    store: Record<string, any>;
    children: any;
};
export const ArtStoreProvider = ({ children, store }: ArtStoreProviderProps) => {
    return (
        <StoreContext.Provider value={{ store }}>
            {children}
        </StoreContext.Provider>
    );
};

type ArtStoreConnectParams = {
    mapStateToProps?: (state: Record<string, any>) => Record<string, any>;
    mapDispatchToProps?: Record<string, (payload: any) => Record<string, any>>;
};
export const artStoreConnect = ({
    mapStateToProps = (state: Record<string, any>) => ({}),
    mapDispatchToProps = {}
}: ArtStoreConnectParams) =>
    (WrappedComponent: ComponentType | FC) =>
        (props: any) => {
            const { store } = useContext<any>(StoreContext);
            const [state, setState] = useState(store.getState());

            const updateState = (state: Record<string, any>) => {
                setState(state);
            };

            useEffect(() => {
                store.subscribe(updateState);

                return () => {
                    store.unsubscribe(updateState);
                };
            }, []);

            const dispatch = store.dispatch;
            const actions = Object.entries(mapDispatchToProps).reduce((acc, [name, action]) => {
                return ({
                    ...acc,
                    [name]: (payload: any) => dispatch(action(payload))
                });
            }, {});

            return (
                <WrappedComponent
                    {...props}
                    {...mapStateToProps(state)}
                    {...actions}
                />
            );
        };
