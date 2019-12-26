import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './SandboxPropsTable.less';

const cn = classNames.bind(style);
const TABLE_HEADINGS = ['prop-name', 'type', 'description', 'required'];

type StringArray = Array<string>;
interface Props {
    items: Array<StringArray>;
    labels: Record<string, string>;
}

export class SandboxPropsTable extends Component<Props> {
    render() {
        const { items, labels } = this.props;

        return (
            <table className={cn('Sandbox-props-table')}>
                <tbody className={cn('Sandbox-props-table__body')}>
                    <tr className={cn('Sandbox-props-table__row')}>
                        {TABLE_HEADINGS.map((heading, index) => (
                            <th
                                className={cn('Sandbox-props-table__heading')}
                                key={`${index}_${heading}`}
                            >
                                {labels[heading]}
                            </th>
                        ))}
                    </tr>
                    {items.map((params, key) => (
                        <tr className={cn('Sandbox-props-table__row')} key={`${key}_${params[0]}`}>
                            {params.map((param, index) => (
                                <td
                                    className={cn('Sandbox-props-table__column', {
                                        'Sandbox-props-table__column--type': index === 1,
                                        'Sandbox-props-table__column--required': index === 3,
                                        'Sandbox-props-table__column--small': index === 3
                                    })}
                                    key={`${key}_${index}_${param}`}
                                >
                                    {labels[param]}
                                </td>
                            ))}
                            {!params[3] && (
                                <td className={cn('Sandbox-props-table__column', 'Sandbox-props-table__column--small')}>
                                    {labels.no}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}
