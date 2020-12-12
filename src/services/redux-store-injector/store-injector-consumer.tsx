import React, { PureComponent } from 'react';
import { InjectorContext } from './context';
import { StoreInjectorConsumerProps } from './types';

export class StoreInjectorConsumer extends PureComponent<StoreInjectorConsumerProps> {
    static contextType = InjectorContext;

    componentDidMount() {
        const { asyncReducers = [], asyncSagas = [] } = this.props;
        const { setReducers, setSagas } = this.context;

        setReducers(asyncReducers);
        setSagas(asyncSagas);
    }

    componentWillUnmount() {
        const { asyncReducers = [], asyncSagas = [], withEjectReducers } = this.props;
        const { ejectReducers, ejectSagas } = this.context;

        if (withEjectReducers) {
            ejectReducers(asyncReducers);
        }

        ejectSagas(asyncSagas);
    }

    render() {
        return this.props.children;
    }
}
