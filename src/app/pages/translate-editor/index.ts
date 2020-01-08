import { connect } from 'react-redux';
import { localizationLabelsSelector } from '../../../services/localization';
import { TranslateEditorPageComponent } from './TranslateEditorPage';
import { insertReducer } from '../../store';
import { translateEditorPageReducer } from './reducer';
import { TRANSLATE_EDITOR_PAGE_REDUCER } from './constants';
import { closeEditorModal, openEditorModal } from './actions';
import { EditorModalDataSelector, isOpenEditorModalSelector } from './selectors';
import { EditorState } from './types';
import { LocalizationState } from '../../../services/localization/types';

const TranslateEditorPageReducer = {
    name: TRANSLATE_EDITOR_PAGE_REDUCER,
    reducer: translateEditorPageReducer,
    rewritable: true
};
const mapStateToProps = (state: Record<string, any> & EditorState & LocalizationState) => ({
    isOpenModal: isOpenEditorModalSelector(state),
    labels: localizationLabelsSelector(state),
    modalData: EditorModalDataSelector(state)
});
const actions = {
    closeModal: closeEditorModal,
    openModal: openEditorModal
};
const injectedReducers = [TranslateEditorPageReducer];
export const TranslateEditorPage = insertReducer(injectedReducers)(
    connect(mapStateToProps, actions)(
        TranslateEditorPageComponent
    )
);
