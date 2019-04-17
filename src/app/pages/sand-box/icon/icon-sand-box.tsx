import React from 'react';
import { SandBox } from '../sand-box';
import { IconModule } from '../../../elements/icon';

const { Icon, IconNames } = IconModule;
const iconProps = [
    {
        size: '2x',
        pulse: true
    }, {
        stack: 'fas',
        size: '2x',
        fontSize: 18
    }, {
        stack: 'far',
        inverse: true,
        fontSize: 40
    },
];
const renderTable = (index: number, name: string) => iconProps.map((props, propsIndex) => (
    <table key={index + propsIndex}>
        <tbody>
        <tr>
            <td>
                <Icon name={name} {...props}/>
            </td>
            <td>
                <span style={{padding: '0 20px'}}>name: {name}</span>
            </td>
            <td>
                <span style={{padding: '0 20px'}}>stack: {props.stack}</span>
            </td>
        </tr>
        </tbody>
    </table>
));
const iconItems = Object.values(IconNames).map((item, index) => typeof item === 'string'
        ? renderTable(index, item)
        : Object.values(item).map((name, index) => renderTable(index, name))
);

export const IconSandBox = () => (
    <SandBox
        items={iconItems}
    />
);

