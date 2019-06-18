import React from 'react';
import classNames from 'classnames/bind';
import { Anchor, Text } from '../../../elements';
import { logger } from '../utils';
import { PROJECT_LINK } from '../../../constants';

const style = require('../sand-box.less');
const cn = classNames.bind(style);

const LabelLink = {
    DEFAULT: 'Link to GitHub open in new window',
    DISABLED: 'Link disabled',
    PSEUDO: 'Link pseudo console message on click',
    ACTIVE: 'Link active'
};
const anchorProps = [
    {
        href: PROJECT_LINK,
        label: LabelLink.DEFAULT,
        newPage: true,
        onClick: logger('Link click')
    }, {
        disabled: true,
        href: PROJECT_LINK,
        label: LabelLink.DISABLED,
        newPage: true,
        onClick: logger('Link click')
    }, {
        label: LabelLink.PSEUDO,
        onClick: logger('Link click')
    }, {
        active: true,
        label: LabelLink.ACTIVE,
        onClick: logger('Link click')
    }
];

export const AnchorSandBox = () => (
    <div className={cn('Sandbox')}>
        <Text.H2 align="center">
            Anchor
        </Text.H2>
        <div className={cn('Sandbox__block-items')}>
            <Text.Paragraph>
                Компонент для реализации гиперссылок и псевдоссылок
            </Text.Paragraph>
        </div>
        <div className={cn('Sandbox__block-items')}>
            {anchorProps.map((props, index) =>
                <div className={cn('Sandbox__item')} key={`${props.label}${index}`}>
                    <Anchor {...props} />
                </div>
            )}
        </div>
        <div className={cn('Sandbox__block-items')}>
            {anchorProps.map((props, index) =>
                <div className={cn('Sandbox__item', 'Sandbox__item--bg-white')} key={`${props.label}${index}`}>
                    <Anchor {...props} />
                </div>
            )}
        </div>
    </div>
);

