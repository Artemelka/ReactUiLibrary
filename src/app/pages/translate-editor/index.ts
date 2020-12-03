import { connect } from 'react-redux';
import { localizationLabelsSelector } from 'services';
import { TranslateEditorPageComponent } from './TranslateEditorPage';
import { injectReducersAndSagas } from '../../application/app-store';
import { translateEditorPageReducer } from './reducer';
import { TRANSLATE_EDITOR_PAGE_REDUCER } from './constants';
import { closeEditorModal, openEditorModal } from './actions';
import { EditorModalDataSelector, isOpenEditorModalSelector } from './selectors';
import { EditorState } from './types';
import { AppState } from '../../types';

const TranslateEditorPageReducer = {
    name: TRANSLATE_EDITOR_PAGE_REDUCER,
    reducer: translateEditorPageReducer,
    rewritable: true
};

const asyncReducers = [TranslateEditorPageReducer];
export const TranslateEditorPage = injectReducersAndSagas({ asyncReducers })(
    connect((state: AppState & EditorState) => ({
        isOpenModal: isOpenEditorModalSelector(state),
        labels: localizationLabelsSelector(state),
        modalData: EditorModalDataSelector(state)
    }), {
        closeModal: closeEditorModal,
        openModal: openEditorModal
    })(TranslateEditorPageComponent)
);
