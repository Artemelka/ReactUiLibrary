import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import { Text } from 'elements';
import { localizationLabelsSelector } from '@artemelka/react-localization';
import { SandboxPanel, SandboxPropsTable, SandboxBlockItems } from './components';
import { SandboxContainerProps } from './types';
import { AppState } from '../../types';
import style from './sandbox.less';

export const cn = classNames.bind(style);

export const SandboxContainerComponent = ({
    acceptedParameters = SandboxPropsTable,
    acceptedParametersProps,
    description,
    example: Example,
    labels,
    name,
    view: View
}: SandboxContainerProps) => (
    <div className={cn('Sandbox')}>
        <Text.H1 align="center">{name}</Text.H1>
        <Text.H2>
            {labels['description-header']}
        </Text.H2>
        <SandboxBlockItems>
            <Text.Paragraph>
                {labels[description]}
            </Text.Paragraph>
        </SandboxBlockItems>
        <SandboxBlockItems>
            <SandboxPanel
                dataProps={{
                    detailsProps: { ...acceptedParametersProps, labels },
                    summaryProps: {align: 'center'}
                }}
                detailsComponent={acceptedParameters}
                summaryComponent={Text.H5}
            >
                {labels['accepted-parameters']}
            </SandboxPanel>
        </SandboxBlockItems>
        <Text.H2>
            {labels.example}
        </Text.H2>
        <View/>
        <Text.H2>
            {labels['usage-example']}
        </Text.H2>
        <SandboxBlockItems>
            <Example/>
        </SandboxBlockItems>
    </div>
);

export const SandboxContainer = connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}))(SandboxContainerComponent);
