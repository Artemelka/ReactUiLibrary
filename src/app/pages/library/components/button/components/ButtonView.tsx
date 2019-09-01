import React, { Component, ComponentType, Fragment } from 'react';
import { Button } from '../../../../../elements';
import { TranslateComponent, translate } from '../../../../../../services/translate';
import { SandboxLayout } from '../../../../../components';
import { examplesParams } from './constants';
import { ExampleParams } from './types';

const { BlockItems, Item } = SandboxLayout;

const getButtonType = (type: string) => type === 'Icon' ? Button.Icon : Button.IconLabel;

export const ButtonView = () => (
    <Fragment>
        {examplesParams.map(({ heading, props, type }: ExampleParams, index: number) => (
            <BlockItems key={`${index}_${heading}`}>
                <h3>
                    <TranslateComponent translateKey={heading}/>
                </h3>
                {props.map(({label, ...prop}, innerIndex) => {
                    const Component: ComponentType<any> = type ? getButtonType(type) : Button;

                    return (
                        <Item inline key={`${index}_${heading}_${innerIndex}`}>
                            <Component
                                {...prop}
                                {...(label ? { label: translate(label) } : {})}
                            />
                        </Item>
                    );
                })}
            </BlockItems>
        ))}
    </Fragment>
);
