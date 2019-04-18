import React from 'react';
import { SandBox } from '../sand-box';
import { Progress } from '../../../elements';

const progressProps = [
    {
        id: 'test1',
        value: 10
    }, {
        id: 'test2',
        value: 40
    }, {
        id: 'test2',
        value: 60
    }, {
        id: 'test2',
        value: 90
    }
];
const progressLinearExample = progressProps.map(props => <Progress.Linear {...props} key={props.id}/>);
const progressStringExample = progressProps.map(props => <Progress.String {...props} key={props.id}/>);
const sandBoxItems = [
    ...progressLinearExample,
    ...progressStringExample
];

export const ProgressSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
