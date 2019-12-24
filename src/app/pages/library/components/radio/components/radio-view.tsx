import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text } from '../../../../../elements/text';
import { SandboxLayout } from '../../../../../components';
import { LocalizationState } from '../../../../../../services/localization/types';
import { localizationLabelsSelector } from '../../../../../../services/localization';
import { getUniqId, logger } from '../../../../../utils';
import { RadioButtonsContainer } from './radio-container';
import { RadioButtonBaseProps } from '../../../../../elements/inputs/radio/types';
import { ItemsHeading } from './types';

const { BlockItems, Item } = SandboxLayout;
const onChange = (value: string) => logger(`change: ${value}`)();

const checkboxProps: Array<RadioButtonBaseProps> = [
    {
        id: 'test1',
        label: 'label 1',
        value: 'test1'
    }, {
        id: 'test2',
        label: 'label 2',
        value: 'test2'
    }, {
        disabled: true,
        id: 'test3',
        label: 'label 3',
        value: 'test3'
    }
];
const itemsHeading: Array<ItemsHeading> = [
    {
        title: 'radio-button-default',
        props: {
            items: checkboxProps,
            name: 'test1',
            onChange,
            value: 'test2'
        }
    },
    {
        title: 'radio-button-vertical',
        props: {
            column: true,
            items: checkboxProps,
            name: 'test2',
            onChange,
            value: 'test1'
        }
    }
];

export const RadioViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <Fragment>
        <BlockItems>
            {itemsHeading.map(({title, props}, index) => {
                const nextProps = {
                    ...props,
                    items: props.items.map(item => ({
                        ...item,
                        id: `${item.id}_${getUniqId()}`
                    }))
                };

                return (
                    <Item key={index + title}>
                        <Text.H4>{labels[title]}</Text.H4>
                        <RadioButtonsContainer {...nextProps}/>
                    </Item>
                );
            })}
        </BlockItems>
    </Fragment>
);

export const RadioView = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}))(RadioViewComponent);
