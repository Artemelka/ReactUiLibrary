import { connect } from 'react-redux';
import { EditorModal as Modal } from './EditorModal';
import { editorTableHeaderRowSelector } from '../table/redux';
import { AppState } from '../../../../types';

export const EditorModal = connect((state: AppState) => ({
    fieldLabels: editorTableHeaderRowSelector(state)
}))(Modal);
