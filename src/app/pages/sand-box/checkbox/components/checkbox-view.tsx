import React, { Fragment } from 'react';
import { SandboxLayout } from '../../../../components';
import { Text } from '../../../../elements';
import { CheckboxContainer } from './checkbox-container';
import { logger } from '../../utils';

interface CheckboxContainerProps {
    checked?: boolean;
    disabled?: boolean;
    heading: string;
    indeterminate?: boolean;
    onChange: () => void;
}

const INDETERMINATE = 'indeterminate';
const { BlockItems, Item } = SandboxLayout;
const checkboxProps: Array<CheckboxContainerProps> = [
    {
        checked: true,
        disabled: true,
        heading: 'disabled',
        onChange: logger('checkbox Click disabled')
    }, {
        checked: true,
        heading: INDETERMINATE,
        indeterminate: true,
        onChange: logger('checkbox Click')
    }, {
        heading: 'without prop checked',
        onChange: logger('checkbox without prop checked Click')
    }
];
const renderCheckbox = (toggle?: boolean) => checkboxProps.map(
    ({heading, ...props}: CheckboxContainerProps, index: number) => {
        const uniqId = `${index}_${heading}`;
        const name = `test_${uniqId}`;
        const toggleIndeterminate = heading === INDETERMINATE && toggle;
        const newProps = {
            ...props,
            id: name,
            name,
            toggle
        };

        return (
            !toggleIndeterminate
                ? (
                    <Item key={uniqId}>
                        <Text.H6>{heading}</Text.H6>
                        <CheckboxContainer {...newProps} />
                    </Item>
                ) : null
        );
    }
);

export const CheckboxView = () => (
    <Fragment>
        <BlockItems>
            <Text.H4>Checkbox</Text.H4>
            {renderCheckbox()}
        </BlockItems>
        <BlockItems>
            <Text.H4>Checkbox.Toggle</Text.H4>
            {renderCheckbox(true)}
        </BlockItems>
    </Fragment>
);
