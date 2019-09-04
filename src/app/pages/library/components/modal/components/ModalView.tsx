import React, { Component, Fragment } from 'react';
import { Text } from '../../../../../elements';
import { SandboxLayout } from '../../../../../components';
import { TranslateComponent } from '../../../../../../services/translate';
import { ModalDialogContainer } from './modal-dialog-container';
import { ModalPanelContainer } from './modal-panel-container';

const { BlockItems, Item } = SandboxLayout;

export class ModalView extends Component {
    render() {
        return (
            <Fragment>
                <BlockItems>
                    <Item>
                        <Text.H3>
                            <TranslateComponent translateKey="modal-dialog-heading"/>
                        </Text.H3>
                    </Item>
                    <Item>
                        <ModalDialogContainer/>
                    </Item>
                </BlockItems>
                <BlockItems>
                    <Item>
                        <Text.H3>
                            <TranslateComponent translateKey="modal-panel-heading"/>
                        </Text.H3>
                    </Item>
                    <Item>
                        <ModalPanelContainer/>
                    </Item>
                </BlockItems>
            </Fragment>
        );
    }
}
