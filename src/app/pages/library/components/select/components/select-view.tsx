import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text } from 'elements';
import { SandboxLayout } from 'components';
import { localizationLabelsSelector } from 'services';
import { logger } from 'utils';
import { SelectList } from '../../../../../elements/inputs/select/SelectList';
import { AppState } from '../../../../../types';
import { SelectOptions, SelectProps } from '../../../../../elements/inputs/select/types';
import { SelectContainer } from './select-container';

type SelectExampleProps = SelectProps & { label: string };

const { BlockItems, Item } = SandboxLayout;
const handleClick = (value: string) => logger(`value: ${value}`);
const selectListProps: Array<SelectOptions> = [
    {
        disabled: true,
        title: 'select value',
        value: 'select value'
    }, {
        title: 'option 1',
        value: 'option 1'
    }, {
        title: 'option 2',
        value: 'option 2'
    }, {
        title: 'option 3',
        value: 'option 3'
    }, {
        title: 'option 4',
        value: 'option 4'
    }
];
const selectExampleProps: Array<SelectExampleProps> = [
    {
        label: 'Select',
        options: selectListProps,
        value: 'select value',
        id: 'select1',
        name: 'select 1'
    }, {
        disabled: true,
        label: 'Select disabled',
        options: [
            {
                title: 'option',
                value: '1'
            }
        ],
        value: '1',
        id: 'select2',
        name: 'select 2'
    },
];

export const SelectViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <Fragment>
        <BlockItems>
            <Text.H4>
                SelectList
            </Text.H4>
            <Item>
                <SelectList
                    items={selectListProps}
                    onClick={handleClick}
                    style={{maxHeight: '200px'}}
                    selectedItemValue={selectListProps[1].value}
                />
            </Item>
        </BlockItems>
        <BlockItems>
            {selectExampleProps.map(({ label, ...restProps}: SelectExampleProps, index: number) => (
                <Item key={index}>
                    <Text.H4>{labels[label]}</Text.H4>
                    <SelectContainer {...restProps} />
                </Item>
            ))}
        </BlockItems>
    </Fragment>
);

export const SelectView = connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}))(SelectViewComponent);
