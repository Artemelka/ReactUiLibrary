import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { localizationLabelsSelector } from '@artemelka/react-localization';
import { Anchor } from 'elements';
import { SandboxLayout } from 'components';
import { logger } from 'utils';
import { PROJECT_LINK } from '../../../../../constants';
import { AppState } from '../../../../../types';

const { BlockItems, Item } = SandboxLayout;
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

export const AnchorViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <Fragment>
        <BlockItems>
            {anchorProps.map(({children, ...rest}, index) => (
                <Item key={`${children}${index}`}>
                    <Anchor {...rest}>
                        {labels[children]}
                    </ Anchor>
                </Item>
            ))}
        </BlockItems>
        <BlockItems>
            {anchorProps.map(({children, ...rest}, index) => (
                <Item bgWhite key={`${children}${index}`}>
                    <Anchor {...rest} >
                        {labels[children]}
                    </Anchor>
                </Item>
            ))}
        </BlockItems>
    </Fragment>
);

export const AnchorView = connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}))(AnchorViewComponent);
