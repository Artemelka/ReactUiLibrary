import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Button, ButtonsGroup } from '../../../../../elements';
import { getUniqId } from '../../../../../../services/utils/uniq-id';
import { translate } from '../../../../../../services/translate';
import { PanelName } from '../../../../../modals';

export class ModalPanelContainerComponent extends Component<RouteComponentProps> {
    handleShowPanel = (name: string) => () => {
        const { history, location: { pathname } } = this.props;

        history.push(`${pathname}/${name}`);
    };

    buttons = [
        {
            id: getUniqId(),
            label: translate('show-first-panel'),
            onClick: this.handleShowPanel(PanelName.FIRST)
        }, {
            id: getUniqId(),
            label: translate('show-second-panel'),
            onClick: this.handleShowPanel(PanelName.SECOND)
        }, {
            id: getUniqId(),
            label: translate('show-third-panel'),
            onClick: this.handleShowPanel(PanelName.THIRD)
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

export const ModalPanelContainer = withRouter(ModalPanelContainerComponent);
