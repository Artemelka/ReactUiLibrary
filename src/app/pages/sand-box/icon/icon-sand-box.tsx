import React from 'react';
import { SandBox } from '../sand-box';
import { Icon } from '../../../elements';

const iconNames = [
    'arrow-alt-circle-left', 'arrow-alt-circle-right', 'arrow-alt-circle-up', 'backspace', 'ban', 'calendar-alt',
    'rocket', 'phone', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'arrow-alt-circle-down',
];
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
const iconItems = iconNames.map((name, index) => iconProps.map((props, propsIndex) => (
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
)));

export const IconSandBox = () => (
    <SandBox
        items={iconItems}
    />
);

