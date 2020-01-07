import { connect } from 'react-redux';
import { EditorModal as Modal } from './EditorModal';
import { editorTableHeaderRowSelector, editorTableRowSelector } from './selectors';
import { getAllDictionaryActionCreator } from './actions';
import { LocalizationState } from '../../../../services/localization/types';
import { localizationIsLoadingSelector } from '../../../../services/localization';
import { EditorTableComponent } from './EditorTable';

export const EditorModal = connect((state: Record<string, any> & LocalizationState) => ({
    fieldLabels: editorTableHeaderRowSelector(state)
}))(Modal);

export const EditorTable = connect((state: Record<string, any> & LocalizationState) => ({
    isLoading: localizationIsLoadingSelector(state),
    headerRow: editorTableHeaderRowSelector(state),
    rows: editorTableRowSelector(state)
}), { getDictionary: getAllDictionaryActionCreator })(EditorTableComponent);
