import React, { Component, Fragment } from 'react';
import { Button, ButtonsGroup, ModalModule } from '../../../elements';

const { ModalDialog, ModalPanel, ModalSize } = ModalModule;

export class TestModals extends Component {
    state = {
        firstModal: false,
        firstPanel: false,
        secondModal: false,
        secondPanel: false,
        thirdModal: false,
        thirdPanel: false
    };

    showFirstModal = () => this.setState({ firstModal: true });

    showFirstPanel = () => this.setState({ firstPanel: true });

    showSecondModal = () => this.setState({ secondModal: true });

    showSecondPanel = () => this.setState({ secondPanel: true });

    showThirdModal = () => this.setState({ thirdModal: true });

    showThirdPanel = () => this.setState({ thirdPanel: true });

    closeFirstModal = () => this.setState({ firstModal: false });

    closeFirstPanel = () => this.setState({ firstPanel: false });

    closeSecondModal = () => this.setState({ secondModal: false });

    closeSecondPanel = () => this.setState({ secondPanel: false });

    closeThirdModal = () => this.setState({ thirdModal: false });

    closeThirdPanel = () => this.setState({ thirdPanel: false });

    render() {
        const { firstModal, firstPanel, secondModal, secondPanel, thirdModal, thirdPanel } = this.state;

        return (
            <Fragment>
                <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                    <Button
                        accent
                        onClick={this.showFirstModal}
                        label="show 1 modal"
                    />
                    <Button
                        accent
                        onClick={this.showSecondModal}
                        label="show 2 modal"
                    />
                    <Button
                        accent
                        onClick={this.showThirdModal}
                        label="show 3 modal"
                    />
                </ButtonsGroup.Component>
                <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                    <Button
                        accent
                        onClick={this.showFirstPanel}
                        label="show 1 panel"
                    />
                    <Button
                        accent
                        onClick={this.showSecondPanel}
                        label="show 2 panel"
                    />
                    <Button
                        accent
                        onClick={this.showThirdPanel}
                        label="show 3 panel"
                    />
                </ButtonsGroup.Component>
                <ModalDialog
                    opened={firstModal}
                    size={ModalSize.LARGE}
                    title="My first modal window"
                >
                    12345
                    <br/><br/><br/>
                    <Button
                        onClick={this.closeFirstModal}
                        label="close"
                    />
                </ModalDialog>
                <ModalDialog
                    onClose={this.closeSecondModal}
                    opened={secondModal}
                    title="My second modal window"
                >
                    12345
                </ModalDialog>
                <ModalDialog
                    onClose={this.closeThirdModal}
                    opened={thirdModal}
                    size={ModalSize.SMALL}
                    title="My third modal window"
                >
                    12345
                    <br/><br/><br/>
                    <Button
                        onClick={this.showFirstModal}
                        label="show 1 modal"
                    />
                    <Button
                        onClick={this.showSecondModal}
                        label="show 2 modal"
                    />
                </ModalDialog>
                <ModalPanel
                    onClose={this.closeFirstPanel}
                    opened={firstPanel}
                    size={ModalSize.LARGE}
                    title="My first modal panel"
                >
                    67890
                </ModalPanel>
                <ModalPanel
                    opened={secondPanel}
                    title="My second modal panel"
                >
                    67890
                    <br/><br/><br/>
                    <Button
                        onClick={this.closeSecondPanel}
                        label="close"
                    />
                </ModalPanel>
                <ModalPanel
                    onClose={this.closeThirdPanel}
                    opened={thirdPanel}
                    size={ModalSize.SMALL}
                    title="My third modal panel"
                >
                    67890
                </ModalPanel>
            </Fragment>
        );
    }
}
