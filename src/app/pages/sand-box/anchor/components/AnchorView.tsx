import React, { Fragment } from 'react';
import { Anchor } from '../../../../elements';
import { TranslateComponent } from '../../../../../services/translate';
import { SandboxLayout } from '../../../../components';
import { logger } from '../../utils';
import { PROJECT_LINK } from '../../../../constants';

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

export const AnchorView = () => (
    <Fragment>
        <BlockItems>
            {anchorProps.map(({children, ...rest}, index) =>
                <Item key={`${children}${index}`}>
                    <Anchor {...rest}>
                        <TranslateComponent translateKey={children} />
                    </ Anchor>
                </Item>
            )}
        </BlockItems>
        <BlockItems>
            {anchorProps.map(({children, ...rest}, index) =>
                <Item bgWhite key={`${children}${index}`}>
                    <Anchor {...rest} >
                        <TranslateComponent translateKey={children} />
                    </Anchor>
                </Item>
            )}
        </BlockItems>
    </Fragment>
);
