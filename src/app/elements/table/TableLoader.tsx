import React, { Component } from 'react';
import classNames from 'classnames/bind';

const style = require('./Table.less');
const cn = classNames.bind(style);

export class TableLoader extends Component {
    render() {
        return (
            <tr className={cn('Table__row')}>
                <td className={cn('Table__col', 'Table__col--loader')}>fetching data</td>
            </tr>
        );
    }
}
