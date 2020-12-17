import { connect } from 'react-redux';
import { AppState } from 'app/types';
import { localizationIsLoadingSelector } from '@artemelka/react-localization';
import { EditorTableComponent } from './EditorTable';
import { editorTableHeaderRowSelector, editorTableRowSelector, getAllDictionaryActionSaga } from './redux';

export const EditorTable = connect((state: AppState) => ({
    isLoading: localizationIsLoadingSelector(state),
    headerRow: editorTableHeaderRowSelector(state),
    rows: editorTableRowSelector(state)
}), {
    getDictionary: getAllDictionaryActionSaga
})(EditorTableComponent);
