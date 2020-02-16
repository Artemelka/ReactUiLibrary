import { connect } from 'react-redux';
import { localizationLabelsSelector } from 'services';
import { SideBarToggleComponent } from './SideBarToggle';
import { AppState } from '../../../../types';

export const SideBarToggle = connect((state: AppState) => ({
    labels: localizationLabelsSelector(state)
}))(SideBarToggleComponent);
