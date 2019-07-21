import React, { ComponentType } from 'react';
import classNames from 'classnames/bind';
import { Text, TranslateComponent } from '../../elements';
import { SandboxPanel } from '../sandbox-panel/SandboxPanel';

const style = require('./sandbox.less');
const cn = classNames.bind(style);

interface SandboxProps {
    children: any;
}
interface Props {
    acceptedParameters: ComponentType;
    acceptedParametersProps?: {[key: string]: any};
    description: string;
    example: ComponentType;
    name: string;
    view: ComponentType;
}
interface ItemProps extends SandboxProps {
    bgWhite?: boolean;
}

export const SandboxBlockItems = ({children}: SandboxProps) => <div className={cn('Sandbox__block-items')}>{children}</div>;

export const SandboxItem = ({bgWhite, children}: ItemProps) => (
    <div
        className={cn('Sandbox__item', {
            'Sandbox__item--bg-white': bgWhite
        })}
    >
        {children}
    </div>
);

export const SandboxContainer = ({acceptedParameters, acceptedParametersProps, description, example: Example, name, view: View}: Props) => (
    <div className={cn('Sandbox')}>
        <Text.H2 align="center">{name}</Text.H2>
        <Text.H4>
            <TranslateComponent translateKey={'description-header'} />
        </Text.H4>
        <SandboxBlockItems>
            <Text.Paragraph>
                <TranslateComponent translateKey={description} />
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
                <TranslateComponent translateKey={'accepted-parameters'} />
            </SandboxPanel>
        </SandboxBlockItems>
        <Text.H4>
            <TranslateComponent translateKey={'example'} />
        </Text.H4>
        <View/>
        <Text.H4>
            <TranslateComponent translateKey={'usage-example'} />
        </Text.H4>
        <SandboxBlockItems>
            <Example/>
        </SandboxBlockItems>
    </div>
);
