import React, { Component, ComponentType, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../../../elements';
import { localizationLabelsSelector } from '../../../../../../services/localization';
import { LocalizationState } from '../../../../../../services/localization/types';
import { SandboxLayout } from '../../../../../components';
import { examplesParams } from './constants';
import { ExampleParams } from './types';

const { BlockItems, Item } = SandboxLayout;

const getButtonType = (type: string) => type === 'Icon' ? Button.Icon : Button.IconLabel;

export const ButtonViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <Fragment>
        {examplesParams.map(({ heading, props, type }: ExampleParams, index: number) => (
            <BlockItems key={`${index}_${heading}`}>
                <h3>{labels[heading]} </h3>
                {props.map(({label, ...prop}, innerIndex) => {
                    const Component: ComponentType<any> = type ? getButtonType(type) : Button;

                    return (
                        <Item inline key={`${index}_${heading}_${innerIndex}`}>
                            <Component
                                {...prop}
                                {...(label ? { label: labels[label] } : {})}
                            />
                        </Item>
                    );
                })}
            </BlockItems>
        ))}
    </Fragment>
);

export const ButtonView = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}))(ButtonViewComponent);
