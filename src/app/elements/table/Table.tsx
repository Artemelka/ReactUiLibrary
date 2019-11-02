import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { TableRow } from './TableRow';
import { TableWidth } from './constants';
import { TableProps } from './types';

const style = require('./Table.less');
const cn = classNames.bind(style);

export class Table extends Component<TableProps> {
    render() {
        const { headerRow, onEditRow, onRemoveRow, rows } = this.props;
        const width = TableWidth.COLUMN * headerRow.length + TableWidth.BUTTON_COLUMN + TableWidth.BODY_PADDING_RIGHT;
        const minRowWidth = `${width}px`;

        return (
            <table className={cn('Table')}>
                <thead className={cn('Table__header')} style={{ minWidth: minRowWidth }}>
                    <TableRow columns={headerRow} header/>
                </thead>
                <tbody className={cn('Table__body')} style={{ minWidth: minRowWidth }}>
                    {rows.map((row, index) => (
                        <TableRow
                            columns={row}
                            editable
                            onEdit={onEditRow}
                            onRemove={onRemoveRow}
                            key={index + row[0]}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}
