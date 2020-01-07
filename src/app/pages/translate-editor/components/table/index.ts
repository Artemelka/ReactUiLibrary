import { connect } from 'react-redux';
import { localizationIsLoadingSelector } from '../../../../../services/localization';
import { EditorTableComponent } from './EditorTable';
import { editorTableHeaderRowSelector, editorTableRowSelector } from '../selectors';
import { getAllDictionaryActionCreator } from '../actions';
import { LocalizationState } from '../../../../../services/localization/types';

export const EditorTable = connect((state: Record<string, any> & LocalizationState) => ({
    isLoading: localizationIsLoadingSelector(state),
    headerRow: editorTableHeaderRowSelector(state),
    rows: editorTableRowSelector(state)
}), { getDictionary: getAllDictionaryActionCreator })(EditorTableComponent);
