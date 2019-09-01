import React, { Fragment, SyntheticEvent } from 'react';
import { SandboxLayout } from '../../../../../components';
import { Input } from '../../../../../elements';
import { TextInputContainer } from './input-container';

const { BlockItems } = SandboxLayout;
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
        id: 'test3',
        label: 'Input.Text with default value & custom width',
        name: 'test3',
        value: 'defaultValue',
        width: 100
    }
];


export const InputView = () => (
    <Fragment>
        {inputProps.map(({ label, ...restProps}) => (
            <BlockItems key={restProps.id}>
                <h3>{label}</h3>
                <TextInputContainer {...restProps} />
            </BlockItems>
        ))}
    </Fragment>
);
