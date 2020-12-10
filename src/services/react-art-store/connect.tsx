import React, { ComponentType, FC, memo, useContext, useEffect, useState } from 'react';
import { StoreContext } from './context';
import { ArtStoreConnectParams } from './types';

export const artStoreConnect = ({
    mapStateToProps,
    mapDispatchToProps
}: ArtStoreConnectParams) =>
    (WrappedComponent: ComponentType | FC) =>
        memo((props: any) => {
            const {
                store: { batchDispatch, dispatch, getState, subscribe, unsubscribe }
            } = useContext<any>(StoreContext);
            const [state, setState] = useState(getState());
            const updateState = (state: Record<string, any>) => setState(state);

            useEffect(() => {
                subscribe(updateState);
                return () => unsubscribe(updateState);
            }, []);

            const mappedProps = Boolean(mapStateToProps) ? mapStateToProps(state) : {};

            const mappedActions = Boolean(mapDispatchToProps)
                ? Object.keys(mapDispatchToProps).reduce((acc, name) => ({
                    ...acc,
                    [name]: (payload: any) => dispatch(mapDispatchToProps[name](payload))
                }), {})
                : { dispatch };

            const connectedProps = {
                ...props,
                ...mappedProps,
                ...mappedActions,
                batchDispatch
            };

            return <WrappedComponent {...connectedProps} />;
        });
