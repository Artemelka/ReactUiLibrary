import React, { Component, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Button, ButtonsGroup } from '../../../../../elements';
import {
    FirstPanel, SecondPanel, ThirdPanel, ModalPanelName, ButtonShowModal
} from '../../../../../components/modals';
import { getUniqId } from '../../../../../../services/utils/uniq-id';
import { translate } from '../../../../../../services/translate';

const buttonsProps = [
    {
        id: getUniqId(),
        label: 'show-second-panel',
        modalName: ModalPanelName.SECOND
    }, {
        id: getUniqId(),
        label: 'show-third-panel',
        modalName: ModalPanelName.THIRD
    }
];
const firstPanelFilledData = {
    firstPanelData: {
        title: 'title',
        description: 'description'
    }
};
const firstPanelEmptyData = {
    firstPanelData: {
        title: '',
        description: ''
    }
};

type FirstPanelData = {
    title: string,
    description: string
};
type ModalPanelContainerState = {
    firstPanelData: FirstPanelData
};

export class ModalPanelContainerComponent extends Component<RouteComponentProps, ModalPanelContainerState> {
    state = {
        firstPanelData: {
            title: '',
            description: ''
        }
    };

    handleClickShowFirstFilled = () => {
        this.setState(firstPanelFilledData, this.showFirstModal);
    };

    handleClickShowFirstEmpty = () => {
        this.setState(firstPanelEmptyData, this.showFirstModal);
    };

    showFirstModal = () => {
        const { history, location: { pathname } } = this.props;

        history.push(`${pathname}/${ModalPanelName.FIRST}`);
    };

    render() {
        return (
            <Fragment>
                <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                    <Button
                        onClick={this.handleClickShowFirstFilled}
                        label={translate('show-first-panel-filled')}
                    />
                    <Button
                        onClick={this.handleClickShowFirstEmpty}
                        label={translate('show-first-panel-empty')}
                    />
                    {buttonsProps.map(({ id, label, modalName }) => (
                        <ButtonShowModal
                            accent
                            key={id}
                            label={translate(label)}
                            modalName={modalName}
                        />))}
                </ButtonsGroup.Component>
                <FirstPanel modalData={this.state.firstPanelData} />
                <SecondPanel/>
                <ThirdPanel/>
            </Fragment>
        );
    }
}

export const ModalPanelContainer = withRouter(ModalPanelContainerComponent);
