import React, { Component, ComponentType, FC } from 'react';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import {
    injectReducer,
    InjectReducerParamsType,
    injectSaga,
    InjectSagaParamsType,
    removeReducer,
    removeSaga,
    appStore
} from './redux';

type InjectReducersAndSagasParamsType = {
    asyncReducers?: Array<InjectReducerParamsType>;
    asyncSagas?: Array<InjectSagaParamsType>;
};

export const injectReducersAndSagas = ({ asyncReducers = [], asyncSagas = [] }: InjectReducersAndSagasParamsType) =>
    (WrappedComponent: ComponentType | FC) =>
        class StoreInjectorHoc extends Component<Record<string, any>> {
            constructor(props: Record<string, any>) {
                super(props);
                asyncReducers.forEach(({ name, reducer }) => {
                    injectReducer({ name, reducer });
                });
                asyncSagas.forEach(({ name, saga }) => {
                    injectSaga({ name, saga });
                });
            }

            componentWillUnmount() {
                asyncReducers.forEach(({ name, reducer }) => {
                    removeReducer({ name, reducer });
                });
                asyncSagas.forEach(({ name, saga }) => {
                    removeSaga({ name, saga });
                });
            }

            render() {
                return <WrappedComponent {...this.props}/>;
            }
        };
