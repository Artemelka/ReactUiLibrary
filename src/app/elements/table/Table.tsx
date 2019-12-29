import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import { Loader } from '../loader/Loader';
import { TableRow } from './TableRow';
import { TableWidth } from './constants';
import { TableProps } from './types';
import style from './Table.less';

const cn = classNames.bind(style);

export class Table extends Component<TableProps> {
    render() {
        const { isLoading, headerRow, onEditRow, onRemoveRow, rows } = this.props;
        const width = TableWidth.COLUMN * headerRow.length + TableWidth.BUTTON_COLUMN + TableWidth.BODY_PADDING_RIGHT;
        const rowMinWidth = `${width}px`;

        return (
            <table className={cn('Table')}>
                <thead className={cn('Table__header')} style={{ minWidth: rowMinWidth }}>
                    <TableRow columns={headerRow} header/>
                </thead>
                <tbody className={cn('Table__body', { 'Table__body--loader': isLoading })} style={{ minWidth: rowMinWidth }}>
                    {rows.map((row, index) => (
                        <TableRow
                            columns={row}
                            editable
                            onEdit={onEditRow}
                            onRemove={onRemoveRow}
                            key={index + row[0]}
                        />
                    ))}
                    <Loader enabled={isLoading} inContainer />
                </tbody>
            </table>
        );
    }
}
