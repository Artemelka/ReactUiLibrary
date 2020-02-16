import React, { Component, Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Button, ButtonsGroup } from 'elements';
import { getUniqId } from 'utils';
import {
    FirstPanel, SecondPanel, ThirdPanel, ModalPanelName, ButtonShowModal
} from '../../../../../components/modals';

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
type Props = RouteComponentProps & { labels: Record<string, string> };

export class ModalPanelContainerComponent extends Component<Props, ModalPanelContainerState> {
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
        const { labels } = this.props;

        return (
            <Fragment>
                <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                    <Button
                        onClick={this.handleClickShowFirstFilled}
                        label={labels['show-first-panel-filled']}
                    />
                    <Button
                        onClick={this.handleClickShowFirstEmpty}
                        label={labels['show-first-panel-empty']}
                    />
                    {buttonsProps.map(({ id, label, modalName }) => (
                        <ButtonShowModal
                            accent
                            key={id}
                            label={labels[label]}
                            modalName={modalName}
                        />
                    ))}
                </ButtonsGroup.Component>
                <FirstPanel modalData={this.state.firstPanelData} title={labels['first-modal-panel']} />
                <SecondPanel title={labels['second-modal-panel']} label={labels.close} />
                <ThirdPanel title={labels['third-modal-panel']} />
            </Fragment>
        );
    }
}

export const ModalPanelContainer = withRouter(ModalPanelContainerComponent);
