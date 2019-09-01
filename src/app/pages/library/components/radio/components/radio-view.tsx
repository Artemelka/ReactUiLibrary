import React, { Fragment } from 'react';
import { Text } from '../../../../../elements/text';
import { SandboxLayout } from '../../../../../components';
import { TranslateComponent } from '../../../../../../services/translate';
import { logger } from '../../../../../../services/utils/utils';
import { RadioButtonsContainer } from './radio-container';
import { getUniqId } from '../../../../../../services/utils/uniq-id';
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

export const RadioView = () => (
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
                        <Text.H4>
                            <TranslateComponent translateKey={title}/>
                        </Text.H4>
                        <RadioButtonsContainer {...nextProps}/>
                    </Item>
                );
            })}
        </BlockItems>
    </Fragment>
);
