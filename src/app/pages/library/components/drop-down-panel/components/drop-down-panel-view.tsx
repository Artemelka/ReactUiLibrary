import React, { Fragment } from 'react';
import { IconModule } from 'elements';
import { SandboxLayout } from 'components';
import { logger } from 'utils';
import { DropDownPanelContainer } from './drop-down-panel-container';
import { DropDownPanelProps } from '../../../../../elements/drop-down-panel/types';

const { BlockItems, Item } = SandboxLayout;
const { TRASH } = IconModule.IconNames;
const dropDownPanelActionProps = [
    {}, {
        actionIcon: {
            iconName: TRASH,
            onClick: logger('click action')
        }
    }, {
        openingByIcon: true
    }, {
        actionIcon: {
            iconName: TRASH,
            onClick: logger('click action')
        },
        openingByIcon: true
    }
];
const dropDownPanelProps: Array<DropDownPanelProps> = [
    {
        opened: false
    }, {
        onlyBorder: true,
        opened: false
    }, {
        darkColor: true,
        opened: false
    }, {
        emptyStyle: true,
        opened: false
    }
];

export const DropDownPanelView = () => (
    <Fragment>
        {dropDownPanelProps.map((props, index) => (
            <BlockItems key={index}>
                {dropDownPanelActionProps.map((actions, otherIndex) => (
                    <Item key={Number(`${otherIndex}${index}`)}>
                        <DropDownPanelContainer
                            {...props}
                            {...actions}
                            index={otherIndex}
                        />
                    </Item>
                ))}
            </BlockItems>
        ))}
    </Fragment>
);
