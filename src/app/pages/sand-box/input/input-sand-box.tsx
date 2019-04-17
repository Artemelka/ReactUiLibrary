import React, { Component, Fragment } from 'react';
import { SandBox } from '../sand-box';
import { Input } from '../../../elements/inputs';

const inputProps = [
    {
        id: 'test1',
        name: 'test1'
    }, {
        id: 'test2',
        name: 'test2',
        disabled: true
    }
];
const sandBoxItems = inputProps.map(props => <Input {...props} key={props.id}/>);

export const InputSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
