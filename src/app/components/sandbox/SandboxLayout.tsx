import React, { ComponentType } from 'react';
import classNames from 'classnames/bind';
import { Text, TranslateComponent } from '../../elements';
import { SandboxPanel } from '../sandbox-panel/SandboxPanel';
import { SandboxPropsTable } from '../sandbox-props-table/SandboxPropsTable';

const style = require('./sandbox.less');
const cn = classNames.bind(style);

interface SandboxProps {
    children: any;
}
interface Props {
    acceptedParameters?: ComponentType;
    acceptedParametersProps?: {[key: string]: any};
    description: string;
    example: ComponentType;
    name: string;
    view: ComponentType;
}
interface ItemProps extends SandboxProps {
    bgWhite?: boolean;
    inline?: boolean;
}

export const SandboxBlockItems = ({children}: SandboxProps) => <div className={cn('Sandbox__block-items')}>{children}</div>;

export const SandboxItem = ({bgWhite, inline, children}: ItemProps) => (
    <div
        className={cn('Sandbox__item', {
            'Sandbox__item--bg-white': bgWhite,
            'Sandbox__item--inline': inline
        })}
    >
        {children}
    </div>
);

export const SandboxContainer = ({
     acceptedParameters = SandboxPropsTable,
     acceptedParametersProps,
     description,
     example: Example,
     name,
     view: View
}: Props) => (
    <div className={cn('Sandbox')}>
        <Text.H1 align="center">{name}</Text.H1>
        <Text.H2>
            <TranslateComponent translateKey={'description-header'} />
        </Text.H2>
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
        <Text.H2>
            <TranslateComponent translateKey={'example'} />
        </Text.H2>
        <View/>
        <Text.H2>
            <TranslateComponent translateKey={'usage-example'} />
        </Text.H2>
        <SandboxBlockItems>
            <Example/>
        </SandboxBlockItems>
    </div>
);
