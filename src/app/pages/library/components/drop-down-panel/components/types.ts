import { DropDownPanelProps } from '../../../../../elements/drop-down-panel/types';

export type DropDownPanelContainerState = { opened: boolean };

export interface DropDownPanelContainerProps extends DropDownPanelProps {
    index: number;
}
