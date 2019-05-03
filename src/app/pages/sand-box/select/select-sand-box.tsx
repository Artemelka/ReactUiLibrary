import React, { Component, Fragment, SyntheticEvent } from 'react';
import { SandBox } from '../sand-box';
import { Select } from '../../../elements';
import { SelectProps } from '../../../elements/inputs/select/Select';
import { SelectList } from '../../../elements/inputs/select/SelectList';

interface ExampleProps extends SelectProps {
    label: string;
}

const selectListProps = [
    {
        items: [
            {
                disabled: true,
                title: 'select value',
                value: '1'
            }, {
                title: 'option 1',
                value: '2'
            }, {
                title: 'option 2',
                value: '3'
            }
        ]
    }
];

const selectProps: Array<ExampleProps> = [
    {
        label: 'Select',
        options: [
            {
                disabled: true,
                title: 'select value',
                value: '1'
            }, {
                title: 'option 1',
                value: '2'
            }, {
                title: 'option 2',
                value: '2'
            }
        ],
        value: '1'
    }, {
        disabled: true,
        label: 'Select disabled',
        options: [
            {
                title: 'option',
                value: '1'
            }
        ],
        value: '1'
    },
];

const selectListItems = selectListProps.map((props, index) =>{
    return (
        <Fragment key={index}>
            <SelectList items={props.items} />
        </Fragment>
    );
});

const selectItems = selectProps.map((props: ExampleProps, index: number) => {
    const { label, ...restProps} = props;

    return (
        <Fragment key={index}>
            <h3>{label}</h3>
            <Select {...restProps} />
        </Fragment>
    );
});

const sandBoxItems = [ ...selectListItems, ...selectItems ];

export const SelectSandBox = () => (
    <SandBox
        items={sandBoxItems}
    />
);
