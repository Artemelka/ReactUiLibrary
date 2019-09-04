import React, { Component, Fragment } from 'react';
import { Button, ButtonsGroup, ModalModule } from '../../../../../elements';
import { getUniqId } from '../../../../../../services/utils/uniq-id';
import { translate } from '../../../../../../services/translate';

const { ModalDialog, ModalSize } = ModalModule;
const ModalName = {
    FIRST: 'firstModal',
    SECOND: 'secondModal',
    THIRD: 'thirdModal'
};

export class ModalDialogContainer extends Component {
    state = {
        [ModalName.FIRST]: false,
        [ModalName.SECOND]: false,
        [ModalName.THIRD]: false
    };

    handleShowModal = (name: string) => () => this.setState({ [name]: true });

    handleCloseModal = (name: string) => () => this.setState({ [name]: false });

    buttons = [
        {
            onClick: this.handleShowModal(ModalName.FIRST),
            label: translate('show-first-modal')
        }, {
            onClick: this.handleShowModal(ModalName.SECOND),
            label: translate('show-second-modal')
        }, {
            onClick: this.handleShowModal(ModalName.THIRD),
            label: translate('show-third-modal')
        }
    ];

    render() {
        const { firstModal, secondModal, thirdModal } = this.state;

        return (
            <Fragment>
                <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                    {this.buttons.map(({ onClick, label }) => (
                        <Button
                            accent
                            onClick={onClick}
                            label={label}
                            key={getUniqId()}
                        />))}
                </ButtonsGroup.Component>
                <ModalDialog
                    opened={firstModal}
                    size={ModalSize.LARGE}
                    title={translate('first-modal-window')}
                >
                    Content
                    <br/><br/><br/>
                    <Button
                        onClick={this.handleCloseModal(ModalName.FIRST)}
                        label={translate('close')}
                    />
                </ModalDialog>
                <ModalDialog
                    onClose={this.handleCloseModal(ModalName.SECOND)}
                    opened={secondModal}
                    title={translate('second-modal-window')}
                >
                    Content
                </ModalDialog>
                <ModalDialog
                    onClose={this.handleCloseModal(ModalName.THIRD)}
                    opened={thirdModal}
                    size={ModalSize.SMALL}
                    title={translate('third-modal-window')}
                >
                    Content
                    <br/><br/><br/>
                    <Button
                        onClick={this.handleShowModal(ModalName.FIRST)}
                        label={translate('show-first-modal')}
                    />
                    <br/><br/><br/>
                    <Button
                        onClick={this.handleShowModal(ModalName.SECOND)}
                        label={translate('show-second-modal')}
                    />
                </ModalDialog>
            </Fragment>
        );
    }
}
