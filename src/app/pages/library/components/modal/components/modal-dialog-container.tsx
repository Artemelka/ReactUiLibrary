import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Button, ButtonsGroup } from '../../../../../elements';
import { getUniqId } from '../../../../../../services/utils/uniq-id';
import { translate } from '../../../../../../services/translate';
import { ModalName } from '../../../../../modals';

export class ModalDialogContainerComponent extends Component<RouteComponentProps> {
    handleShowModal = (name: string) => () => {
        const { history, location: { pathname } } = this.props;

        history.push(`${pathname}/${name}`);
    };

    buttons = [
        {
            id: getUniqId(),
            label: translate('show-first-modal'),
            onClick: this.handleShowModal(ModalName.FIRST)
        }, {
            id: getUniqId(),
            label: translate('show-second-modal'),
            onClick: this.handleShowModal(ModalName.SECOND)
        }, {
            id: getUniqId(),
            label: translate('show-third-modal'),
            onClick: this.handleShowModal(ModalName.THIRD)
        }
    ];

    render() {
        return (
            <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                {this.buttons.map(({ id, label, onClick }) => (
                    <Button
                        accent
                        key={id}
                        label={label}
                        onClick={onClick}
                    />))}
            </ButtonsGroup.Component>
        );
    }
}

export const ModalDialogContainer = withRouter(ModalDialogContainerComponent);
