import React, { Component } from 'react';
import classNames from 'classnames/bind';
import { TranslateComponent } from '../../elements';

const style = require('./SandboxPropsTable.less');
const cn = classNames.bind(style);
const TABLE_HEADINGS = ['prop-name', 'type', 'description', 'required'];

type StringArray = Array<string>;
interface Props {
    items: Array<StringArray>;
}

export class SandboxPropsTable extends Component<Props> {
    render() {
        const { items } = this.props;

        return (
            <table className={cn('Sandbox-props-table')}>
                <tbody className={cn('Sandbox-props-table__body')}>
                <tr className={cn('Sandbox-props-table__row')}>
                    {TABLE_HEADINGS.map((heading, index) => (
                        <th
                            className={cn('Sandbox-props-table__heading')}
                            key={`${index}_${heading}`}
                        >
                            <TranslateComponent translateKey={heading}/>
                        </th>
                    ))}
                </tr>
                {items.map((params, key) => (
                    <tr className={cn('Sandbox-props-table__row')} key={`${key}_${params[0]}`}>
                        {params.map((param, index) =>
                            <td
                                className={cn('Sandbox-props-table__column')}
                                key={`${key}_${index}_${param}`}
                            >
                                <TranslateComponent translateKey={param}/>
                            </td>
                        )}
                        {!params[3] &&
                            <td className={cn('Sandbox-props-table__column')}>
                                <TranslateComponent translateKey={'no'}/>
                            </td>
                        }
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}
