import React, { Component } from 'react';
import { Table } from '../../../../elements';
import { EditorTableProps } from '../types';

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
        return <Table {...this.props} />;
    }
}
