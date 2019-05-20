import React from 'react';
import classNames from 'classnames/bind';
import { SandBox } from '../sand-box';
import { IconModule } from '../../../elements/icon';

const style = require('./icon-sand-box.less');
const cn = classNames.bind(style);
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
        <tr key={index + propsIndex} style={{paddingBottom: '20px'}}>
            <td className={cn('table-column')}>
                <Icon name={name} {...props}/>
            </td>
            <td className={cn('table-column')}>{name.toUpperCase()}</td>
            <td className={cn('table-column')}>{props.stack}</td>
        </tr>
));
const iconItems = Object.values(IconNames).map((item, index) => () => (
    <table  >
        <tbody>
        <tr>
            <th className={cn('table-column')}>Icon</th>
            <th className={cn('table-column')}>name</th>
            <th className={cn('table-column')}>stack</th>
        </tr>
        {
            typeof item === 'string'
                ? renderTable(index, item)
                : Object.values(item).map((name, index) => renderTable(index, name))
        }
        </tbody>
    </table>
));

export const IconSandBox = () => (
    <SandBox
        items={iconItems}
    />
);

