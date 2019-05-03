import React, { Component, Fragment, SyntheticEvent } from 'react';
import { SandBox } from '../sand-box';
import { Input } from '../../../elements';

const inputProps = [
    {
        id: 'test1',
        label: 'Input.Text',
        name: 'test1',
        onChange: (event: SyntheticEvent<HTMLInputElement>, value: string) => {
            console.log('input value', value);
        }
    }, {
        id: 'test2',
        label: 'Input.Text disabled',
        name: 'test2',
        disabled: true
    }, {
        id: 'test2',
        label: 'Input.Text with default value',
        name: 'test2',
        value: 'defaultValue'
    }
];
const sandBoxItems = inputProps.map(props => {
    const { label, ...restProps} = props;

    return (
        <Fragment key={props.id}>
            <h3>{label}</h3>
            <Input.Text {...restProps} key={props.id}/>
        </Fragment>
    );
});

export const InputSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
