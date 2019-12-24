import React, { Fragment } from 'react';
import { ButtonsGroup } from '../../../../../elements';
import {
    FirstDialog, SecondDialog, ThirdDialog, ModalDialogName, ButtonShowModal
} from '../../../../../components/modals';
import { getUniqId } from '../../../../../utils';

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

export const ModalDialogContainer = ({ labels }: { labels: Record<string, string> }) => (
    <Fragment>
        <ButtonsGroup.Component separatorSize={ButtonsGroup.SeparatorSize.MEDIUM}>
            {buttonsProps.map(({ id, label, modalName }) => (
                <ButtonShowModal
                    accent
                    key={id}
                    label={labels[label]}
                    modalName={modalName}
                />
            ))}
        </ButtonsGroup.Component>
        <FirstDialog title={labels['first-modal-window']} label={labels.close} />
        <SecondDialog title={labels['second-modal-window']} />
        <ThirdDialog
            title={labels['third-modal-window']}
            label={labels['show-first-modal']}
            secondLabel={labels['show-second-modal']}
        />
    </Fragment>
);
