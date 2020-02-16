import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import { IconModule } from 'elements';
import { SandboxLayout } from 'components';

const style = require('./icon-view.less');
const cn = classNames.bind(style);
const { BlockItems } = SandboxLayout;
const { Icon, IconNames } = IconModule;
const iconProps = [
    {
        size: '2x',
        pulse: true
    }, {
        stack: 'fas',
        size: '2x',
        fontSize: 16
    }, {
        stack: 'far',
        inverse: true,
        fontSize: 40
    }, {
        stack: 'fas',
        inverse: true,
        fontSize: 12
    },
];

const renderTable = (index: number, name: string) => iconProps.map((props, propsIndex) => (
    <tr className={cn('Table-icon-view__row')} key={index + propsIndex}>
        <td className={cn('Table-icon-view__column')}>
            <Icon name={name} {...props}/>
        </td>
        <td className={cn('Table-icon-view__column')}>{name.toUpperCase()}</td>
        <td className={cn('Table-icon-view__column')}>{props.stack}</td>
    </tr>
));
export const IconView = () => (
    <Fragment>
        {Object.values(IconNames).map((item, index) => (
            <BlockItems key={index}>
                <table className={cn('Table-icon-view')}>
                    <tbody>
                        <tr>
                            <th className={cn('Table-icon-view__header-column')}>Icon</th>
                            <th className={cn('Table-icon-view__header-column')}>name</th>
                            <th className={cn('Table-icon-view__header-column')}>stack</th>
                        </tr>
                        {
                            typeof item === 'string'
                                ? renderTable(index, item)
                                : Object.values(item).map((name, index) => renderTable(index, name))
                        }
                    </tbody>
                </table>
            </BlockItems>
        ))}
    </Fragment>
);
