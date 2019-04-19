import React from 'react';
import { SandBox } from '../sand-box';
import { Anchor } from '../../../elements';
import { logger } from '../utils';
import { PROJECT_LINK } from '../../../layouts/Layout';

const LabelLink = {
    LINK: 'Link to GitHub open in new window',
    DISABLED: 'Link disabled',
    PSEUDO: 'Link pseudo console message on click'
};
const anchorProps = [
    {
        href: PROJECT_LINK,
        label: LabelLink.LINK,
        newPage: true
    }, {
        href: PROJECT_LINK,
        label: LabelLink.DISABLED,
        newPage: true,
        disabled: true
    }, {
        label: LabelLink.PSEUDO,
        onClick: logger('Link click')
    }
];

const anchorItems = anchorProps.map((props, index) => <Anchor {...props} key={index}/>);

export const AnchorSandBox = () => (
    <SandBox
        items={anchorItems}
        bgWhite
    />
);
