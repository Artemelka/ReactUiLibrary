import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { locationPathNameSelector } from '../../../../application/app-selectors';
import { SideBarLinkContainer } from './SideBarLink';
import { AppState } from '../../../../types';

export const SideBarLink = connect(
    (store: AppState) => ({ pathname: locationPathNameSelector(store)}),
    { push }
)(SideBarLinkContainer);
