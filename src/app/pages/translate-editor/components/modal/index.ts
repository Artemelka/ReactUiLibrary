import { connect } from 'react-redux';
import { EditorModal as Modal } from './EditorModal';
import { editorTableHeaderRowSelector } from '../table/redux/selectors';
import { LocalizationState } from '../../../../../services/localization/types';

export const EditorModal = connect((state: Record<string, any> & LocalizationState) => ({
    fieldLabels: editorTableHeaderRowSelector(state)
}))(Modal);
