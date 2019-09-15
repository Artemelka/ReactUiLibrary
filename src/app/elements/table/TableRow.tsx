import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { Button, ButtonsGroup, IconModule } from '../index';
import { TableWidth } from './constants';
import { TableRowProps } from './types';

const style = require('./Table.less');
const cn = classNames.bind(style);

export class TableRow extends Component<TableRowProps> {
    static defaultProps = {
        onClick: () => false
    };

    handleClick = () => this.props.onClick(this.props.columns);

    handleRemove = () => this.props.onRemove(this.props.columns);

    render() {
        const { columns, editable, header } = this.props;
        const Tag = header ? 'th' : 'td';
        const columnWidth = `calc((100% - ${TableWidth.BUTTON_COLUMN}px)/${columns.length})`;
        const colMinWidth = `${TableWidth.COLUMN}px`;

        return (
            <tr className={cn('Table__row', { 'Table__row--header': header })} tabIndex={header ? -1 : 0}>
                {columns.map((value, index) => (
                    <Tag
                        className={cn('Table__col', { 'Table__col--header': header })}
                        key={value + index}
                        style={{ minWidth: colMinWidth, width: columnWidth }}
                    >
                        {value}
                    </Tag>
                ))}
                {
                    editable &&
                    <td className={cn('Table__button-col')} style={{ width: TableWidth.BUTTON_COLUMN }}>
                        <ButtonsGroup.Component>
                            <Button.Icon onClick={this.handleClick} iconName={IconModule.IconNames.EDIT}/>
                            <Button.Icon onClick={this.handleRemove} iconName={IconModule.IconNames.TRASH}/>
                        </ButtonsGroup.Component>
                    </td>
                }
            </tr>
        );
    }
}
