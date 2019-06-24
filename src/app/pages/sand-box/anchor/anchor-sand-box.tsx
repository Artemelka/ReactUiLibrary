import React from 'react';
import classNames from 'classnames/bind';
import { Anchor, Text, TranslateComponent } from '../../../elements';
import { SandboxPanel } from '../../../components';
import { logger } from '../utils';
import { PROJECT_LINK } from '../../../constants';
import { PanelPropsDetails } from './components/PanelPropsDetails';

const style = require('../sand-box.less');
const cn = classNames.bind(style);

const anchorProps = [
    {
        href: PROJECT_LINK,
        children: 'link-default',
        newPage: true,
        onClick: logger('Link click')
    }, {
        disabled: true,
        href: PROJECT_LINK,
        children: 'link-disabled',
        newPage: true,
        onClick: logger('Link click')
    }, {
        children: 'link-pseudo',
        onClick: logger('Link click')
    }, {
        active: true,
        children: 'link-active',
        onClick: logger('Link click')
    }
];

export const AnchorSandBox = () => (
    <div className={cn('Sandbox')}>
        <Text.H2 align="center">
            Anchor
        </Text.H2>
        <Text.H4>
            <TranslateComponent translateKey={'description-header'} />
        </Text.H4>
        <div className={cn('Sandbox__block-items')}>
            <Text.Paragraph>
                <TranslateComponent translateKey={'anchor-description'} />
            </Text.Paragraph>
        </div>
        <div className={cn('Sandbox__block-items')}>
            <SandboxPanel
                dataProps={{summaryProps: {align: 'center'}}}
                detailsComponent={PanelPropsDetails}
                summaryComponent={Text.Paragraph}
            >
                {<TranslateComponent translateKey={'accepted-parameters'} />}
            </SandboxPanel>
        </div>
        <Text.H4>
            UI
        </Text.H4>
        <div className={cn('Sandbox__block-items')}>
            {anchorProps.map(({children, ...rest}, index) =>
                <div className={cn('Sandbox__item')} key={`${children}${index}`}>
                    <Anchor {...rest}>
                        <TranslateComponent translateKey={children} />
                    </ Anchor>
                </div>
            )}
        </div>
        <div className={cn('Sandbox__block-items')}>
            {anchorProps.map(({children, ...rest}, index) =>
                <div className={cn('Sandbox__item', 'Sandbox__item--bg-white')} key={`${children}${index}`}>
                    <Anchor {...rest} >
                        <TranslateComponent translateKey={children} />
                    </Anchor>
                </div>
            )}
        </div>
        <Text.H4>
            <TranslateComponent translateKey={'examples'} />
        </Text.H4>
        <div className={cn('Sandbox__block-items')}>

        </div>
    </div>
);

