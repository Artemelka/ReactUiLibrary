import React, { Component, Fragment } from 'react';
import { Button, ButtonsGroup, Modal, ModalSize } from '../../../elements';

export class TestModals extends Component {
    state = {
        firstModal: false,
        secondModal: false,
        thirdModal: false
    };

    showFirstModal = () => this.setState({ firstModal: true });

    showSecondModal = () => this.setState({ secondModal: true });

    showThirdModal = () => this.setState({ thirdModal: true });

    closeFirstModal = () => this.setState({ firstModal: false });

    closeSecondModal = () => this.setState({ secondModal: false });

    closeThirdModal = () => this.setState({ thirdModal: false });

    render() {
        const { firstModal, secondModal, thirdModal } = this.state;

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
                <Modal
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
                </Modal>
                <Modal
                    onClose={this.closeSecondModal}
                    opened={secondModal}
                    title="My second modal window"
                >
                    12345
                </Modal>
                <Modal
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
                </Modal>
            </Fragment>
        );
    }
}
