import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Text } from '../../../../../elements';
import { SandboxLayout } from '../../../../../components';
import { LocalizationState } from '../../../../../../services/localization/types';
import { localizationLabelsSelector } from '../../../../../../services/localization';
import { ModalDialogContainer } from './modal-dialog-container';
import { ModalPanelContainer } from './modal-panel-container';

const { BlockItems, Item } = SandboxLayout;

export const ModalViewComponent = ({ labels }: { labels: Record<string, string> }) => (
    <Fragment>
        <BlockItems>
            <Item>
                <Text.H3>
                    {labels['modal-dialog-heading']}
                </Text.H3>
            </Item>
            <Item>
                <ModalDialogContainer labels={labels} />
            </Item>
        </BlockItems>
        <BlockItems>
            <Item>
                <Text.H3>
                    {labels['modal-panel-heading']}
                </Text.H3>
            </Item>
            <Item>
                <ModalPanelContainer labels={labels} />
            </Item>
        </BlockItems>
    </Fragment>
);

export const ModalView = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}))(ModalViewComponent);
