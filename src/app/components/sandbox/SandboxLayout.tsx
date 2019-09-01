import React from 'react';
import classNames from 'classnames/bind';
import { Text } from '../../elements';
import { TranslateComponent } from '../../../services/translate';
import { SandboxPanel, SandboxPropsTable, SandboxBlockItems } from './components';
import { SandboxContainerProps } from './types';

const style = require('./sandbox.less');
export const cn = classNames.bind(style);

export const SandboxContainer = ({
    acceptedParameters = SandboxPropsTable,
    acceptedParametersProps,
    description,
    example: Example,
    name,
    view: View
}: SandboxContainerProps) => (
    <div className={cn('Sandbox')}>
        <Text.H1 align="center">{name}</Text.H1>
        <Text.H2>
            <TranslateComponent translateKey={'description-header'}/>
        </Text.H2>
        <SandboxBlockItems>
            <Text.Paragraph>
                <TranslateComponent translateKey={description}/>
            </Text.Paragraph>
        </SandboxBlockItems>
        <SandboxBlockItems>
            <SandboxPanel
                dataProps={{
                    detailsProps: acceptedParametersProps,
                    summaryProps: {align: 'center'}
                }}
                detailsComponent={acceptedParameters}
                summaryComponent={Text.H5}
            >
                <TranslateComponent translateKey={'accepted-parameters'}/>
            </SandboxPanel>
        </SandboxBlockItems>
        <Text.H2>
            <TranslateComponent translateKey={'example'}/>
        </Text.H2>
        <View/>
        <Text.H2>
            <TranslateComponent translateKey={'usage-example'}/>
        </Text.H2>
        <SandboxBlockItems>
            <Example/>
        </SandboxBlockItems>
    </div>
);
