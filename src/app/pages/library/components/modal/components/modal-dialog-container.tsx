import React, { Component, Fragment } from 'react';
import { ButtonsGroup } from '../../../../../elements';
import {
    FirstDialog, SecondDialog, ThirdDialog, ModalDialogName, ButtonShowModal
} from '../../../../../components/modals';
import { getUniqId } from '../../../../../utils';
import { translate } from '../../../../../../services/translate';

const buttonsProps = [
    {
        id: getUniqId(),
        label: 'show-first-modal',
        modalName: ModalDialogName.FIRST
    }, {
        id: getUniqId(),
        label: 'show-second-modal',
        modalName: ModalDialogName.SECOND
    }, {
        id: getUniqId(),
        label: 'show-third-modal',
        modalName: ModalDialogName.THIRD
    }
];

export class ModalDialogContainer extends Component {
    render() {
        return (
            <Fragment>
                <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
                    {buttonsProps.map(({ id, label, modalName }) => (
                        <ButtonShowModal
                            accent
                            key={id}
                            label={translate(label)}
                            modalName={modalName}
                        />))}
                </ButtonsGroup.Component>
                <FirstDialog/>
                <SecondDialog/>
                <ThirdDialog/>
            </Fragment>
        );
    }
}
