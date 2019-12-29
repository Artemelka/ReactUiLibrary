import { connect } from 'react-redux';
import {
    localizationIsLoadingSelector,
    localizationLabelsSelector,
} from '../../../services/localization';
import { TranslateEditorComponent } from './TranslateEditor';
import { getAllDictionaryActionCreator } from './actions';
import { editorTableRowSelector, editorTableHeaderRowSelector } from './selectors';
import { LocalizationState } from '../../../services/localization/types';

export const TranslateEditor = connect((store: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(store),
    isLoading: localizationIsLoadingSelector(store),
    rows: editorTableRowSelector(store),
    headerRow: editorTableHeaderRowSelector(store)
}), {
    getDictionary: getAllDictionaryActionCreator
})(TranslateEditorComponent);
