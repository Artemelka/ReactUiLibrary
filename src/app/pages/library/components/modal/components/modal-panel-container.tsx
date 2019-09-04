import React, { Component, Fragment } from 'react';
import { Button, ButtonsGroup, ModalModule } from '../../../../../elements';
import { getUniqId } from '../../../../../../services/utils/uniq-id';
import { translate } from '../../../../../../services/translate';

const { ModalPanel, ModalSize } = ModalModule;
const PanelName = {
    FIRST: 'firstPanel',
    SECOND: 'secondPanel',
    THIRD: 'thirdPanel'
};

export class ModalPanelContainer extends Component {
    state = {
        [PanelName.FIRST]: false,
        [PanelName.SECOND]: false,
        [PanelName.THIRD]: false
    };

    handleShowPanel = (name: string) => () => this.setState({ [name]: true });

    handleClosePanel = (name: string) => () => this.setState({ [name]: false });

    buttons = [
        {
            onClick: this.handleShowPanel(PanelName.FIRST),
            label: translate('show-first-panel')
        }, {
            onClick: this.handleShowPanel(PanelName.SECOND),
            label: translate('show-second-panel')
        }, {
            onClick: this.handleShowPanel(PanelName.THIRD),
            label: translate('show-third-panel')
        }
    ];

    render() {
        const { firstPanel, secondPanel, thirdPanel } = this.state;

        return (
            <Fragment>
                <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                    {this.buttons.map(({ onClick, label }) => (
                        <Button
                            accent
                            key={getUniqId()}
                            label={label}
                            onClick={onClick}
                        />))}
                </ButtonsGroup.Component>
                <ModalPanel
                    onClose={this.handleClosePanel(PanelName.FIRST)}
                    opened={firstPanel}
                    size={ModalSize.LARGE}
                    title={translate('first-modal-panel')}
                >
                    Content
                </ModalPanel>
                <ModalPanel
                    opened={secondPanel}
                    title={translate('second-modal-panel')}
                >
                    Content
                    <br/><br/><br/>
                    <Button
                        onClick={this.handleClosePanel(PanelName.SECOND)}
                        label={translate('close')}
                    />
                </ModalPanel>
                <ModalPanel
                    onClose={this.handleClosePanel(PanelName.THIRD)}
                    opened={thirdPanel}
                    size={ModalSize.SMALL}
                    title={translate('third-modal-panel')}
                >
                    Content
                </ModalPanel>
            </Fragment>
        );
    }
}
