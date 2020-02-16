import React, { Fragment } from 'react';
import { Text } from 'elements';
import { SandboxLayout } from 'components';
import { ProgressComponent } from './progress-component';
import { ExampleProps, CircularExampleProps } from './types';

const { BlockItems, Item } = SandboxLayout;
const progressProps: Array<ExampleProps> = [
    {
        id: 'test1',
        percent: 10
    }, {
        id: 'test2',
        percent: 40
    }, {
        id: 'test3',
        percent: 60
    }, {
        id: 'test4',
        percent: 90
    }
];
const progressCircularProps: Array<CircularExampleProps> = [
    {
        id: 'Circular1',
        strokeWidth: 10,
        radius: 50,
        percent: 10,
        darkColor: true
    }, {
        id: 'Circular2',
        strokeWidth: 10,
        radius: 80,
        percent: 40
    }, {
        id: 'Circular3',
        strokeWidth: 10,
        radius: 110,
        percent: 60,
        darkColor: true
    }, {
        id: 'Circular4',
        strokeWidth: 10,
        radius: 200,
        percent: 90
    }
];

export const ProgressView = () => (
    <Fragment>
        <BlockItems>
            <Text.H3>Circular</Text.H3>
            {progressCircularProps.map(({id, ...props}) => (
                <Item key={id}>
                    <ProgressComponent {...props} type="Circular"/>
                </Item>
            ))}
        </BlockItems>
        <BlockItems>
            <Text.H3>Linear</Text.H3>
            {progressProps.map(({id, ...props}) => (
                <Item key={id}>
                    <ProgressComponent {...props} type="Linear"/>
                </Item>
            ))}
        </BlockItems>
        <BlockItems>
            <Text.H3>String</Text.H3>
            {progressProps.map(({id, ...props}, index) => (
                <Item key={`${id}_${index}`}>
                    <ProgressComponent {...props} type="String"/>
                </Item>
            ))}
        </BlockItems>
    </Fragment>
);
