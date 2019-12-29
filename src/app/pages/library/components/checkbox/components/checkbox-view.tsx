import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { SandboxLayout } from '../../../../../components';
import { Text } from '../../../../../elements';
import { CheckboxContainer } from './checkbox-container';
import { localizationLabelsSelector } from '../../../../../../services/localization';
import { LocalizationState } from '../../../../../../services/localization/types';
import { logger } from '../../../../../utils';
import { CheckboxContainerProps } from './types';


const { BlockItems, Item } = SandboxLayout;
const checkboxProps: Array<CheckboxContainerProps> = [
    {
        checked: true,
        disabled: true,
        heading: 'checkbox-disabled',
        onChange: logger('checkbox Click disabled')
    }, {
        checked: true,
        heading: 'checkbox-indeterminate',
        indeterminate: true,
        onChange: logger('checkbox Click')
    }, {
        heading: 'checkbox-without-prop-checked',
        onChange: logger('checkbox without prop checked Click')
    }
];
const renderCheckbox = (labels: Record<string, string>, toggle?: boolean) => checkboxProps.map(
    ({heading, ...props}: CheckboxContainerProps, index: number) => {
        const uniqId = `${index}_${heading}`;
        const name = `test_${uniqId}`;
        const toggleIndeterminate = index === 1 && toggle;
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
                        <Text.H6>{labels[heading]}</Text.H6>
                        <CheckboxContainer {...newProps} />
                    </Item>
                ) : null
        );
    }
);

export const CheckboxViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <Fragment>
        <BlockItems>
            <Text.H4>Checkbox</Text.H4>
            {renderCheckbox(labels)}
        </BlockItems>
        <BlockItems>
            <Text.H4>Checkbox.Toggle</Text.H4>
            {renderCheckbox(labels, true)}
        </BlockItems>
    </Fragment>
);

export const CheckboxView = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}))(CheckboxViewComponent);
