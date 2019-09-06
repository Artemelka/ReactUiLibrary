import React from 'react';
import {
    FirstDialogComponent,
    FirstPanelComponent,
    SecondDialogComponent,
    SecondPanelComponent,
    ThirdDialogComponent,
    ThirdPanelComponent,
    modalHOC
} from './components/modals';

export const ModalName = {
    FIRST: 'firstModal',
    SECOND: 'secondModal',
    THIRD: 'thirdModal'
};
export const PanelName = {
    FIRST: 'firstPanel',
    SECOND: 'secondPanel',
    THIRD: 'thirdPanel'
};

export const modals =  {
    [ModalName.FIRST]: modalHOC(FirstDialogComponent),
    [ModalName.SECOND]: modalHOC(SecondDialogComponent),
    [ModalName.THIRD]: modalHOC(ThirdDialogComponent),
    [PanelName.FIRST]: modalHOC(FirstPanelComponent),
    [PanelName.SECOND]: modalHOC(SecondPanelComponent),
    [PanelName.THIRD]: modalHOC(ThirdPanelComponent)
};
