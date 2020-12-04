import React, { Component } from 'react';
// import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { Table } from 'elements';
import { StoreLoader } from '../../../../application/inject-redusers-and-sagas';
import { EditorTableProps, GET_ALL_DICTIONARY_WATCHER_SAGA_NAME, getAllDictionaryWatcherSaga } from './redux';

const asyncSagas = [{
    name: GET_ALL_DICTIONARY_WATCHER_SAGA_NAME,
    saga: getAllDictionaryWatcherSaga
}];
const storeInjectConfig = { sagasToInject: asyncSagas };

export class EditorTableComponent extends Component<EditorTableProps> {
    componentDidMount(): void {
        this.props.getDictionary();
    }

    getSnapshotBeforeUpdate(): any | null {
        const { rows } = this.props;

        return (rows && rows[0]) ? ({ rowsLength: rows.length, colLength: rows[0].length }) : null;
    }

    componentDidUpdate(prevProps: Readonly<EditorTableProps>, prevState: Readonly<{}>, snapshot?: any): void {
        const { rows } = prevProps;

        if (snapshot && rows[0]) {
            const { rowsLength, colLength } = snapshot;

            if (rowsLength !== rows.length || colLength !== rows[0].length) {
                this.props.getDictionary();
            }
        }
    }

    render() {
        return (
            <StoreLoader storeInjectConfig={storeInjectConfig}>
                <Table {...this.props} />
            </StoreLoader>
        );
    }
}

