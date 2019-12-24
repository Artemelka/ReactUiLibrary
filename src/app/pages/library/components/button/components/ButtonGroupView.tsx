import React from 'react';
import { connect } from 'react-redux';
import { SandboxLayout } from '../../../../../components';
import { ButtonsGroup, Text } from '../../../../../elements';
import { localizationLabelsSelector } from '../../../../../../services/localization';
import { LocalizationState } from '../../../../../../services/localization/types';
import { logger } from '../../../../../utils';
import { buttonsGroupProps, buttonGroupItems } from './constants';
import { ButtonGroupItems } from './types';

const { BlockItems, Item } = SandboxLayout;

export const ButtonGroupViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <BlockItems>
        {buttonGroupItems.map((
            { props: { buttonComponent: Component, ...restProps }, title }: ButtonGroupItems,
            index: number
        ) => (
            <Item key={title + index}>
                <Text.H5>
                    {labels[title]}
                </Text.H5>
                <ButtonsGroup.Component {...restProps}>
                    {buttonsGroupProps.map(({label, ...rest}, index) => (
                        <Component
                            key={index + title}
                            {...rest}
                            label={labels[label]}
                            onClick={logger(`click ${label}`)}
                        />
                    ))}
                </ButtonsGroup.Component>
            </Item>
        ))}
    </BlockItems>
);

export const ButtonGroupView = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}))(ButtonGroupViewComponent);
