import React, { SyntheticEvent } from 'react';
import { SandBox } from '../sand-box';
import { Input } from '../../../elements';

const inputProps = [
    {
        id: 'test1',
        name: 'test1',
        onChange: (event: SyntheticEvent<HTMLInputElement>, value: string) => {
            console.log('input value', value);
        }
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
