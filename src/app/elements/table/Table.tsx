import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import { Loader } from '../loader/Loader';
import { TableRow } from './TableRow';
import { TableWidth } from './constants';
import { TableProps } from './types';
import style from './Table.less';

const cn = classNames.bind(style);

export class Table extends Component<TableProps> {
    handleEditRow = (columns: Array<string>) => {
        const { headerRow, onEditRow } = this.props;

        onEditRow(headerRow.reduce((acc: Record<string, string>, value: string, index: number) => ({...acc, [value]: columns[index] }), {}));
    };

    render() {
        const { isLoading, headerRow, onRemoveRow, rows } = this.props;
        const width = TableWidth.COLUMN * headerRow.length + TableWidth.BUTTON_COLUMN + TableWidth.BODY_PADDING_RIGHT;
        const rowMinWidth = `${width}px`;

        return (
            <table className={cn('Table')}>
                <thead className={cn('Table__header')} style={{ minWidth: rowMinWidth }}>
                    <TableRow columns={headerRow} header/>
                </thead>
                <tbody className={cn('Table__body', { 'Table__body--loader': isLoading })} style={{ minWidth: rowMinWidth }}>
                    {isLoading
                        ? (
                            <tr className={cn('Table__loader-row')}>
                                <td className={cn('Table__loader-col')}>
                                    <Loader enabled={isLoading} inContainer />
                                </td>
                            </tr>
                        ) : (
                            rows.map((row, index) => (
                                <TableRow
                                    columns={row}
                                    editable
                                    onEdit={this.handleEditRow}
                                    onRemove={onRemoveRow}
                                    key={index + row[0]}
                                />
                            )
                        ))
                    }
                </tbody>
            </table>
        );
    }
}
