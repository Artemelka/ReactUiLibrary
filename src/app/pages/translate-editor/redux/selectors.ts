import { createSelector } from 'reselect';
import { TRANSLATE_EDITOR_PAGE_REDUCER, initialState } from './constants';
import { EditorStorePart } from './types';

const editorStoreSelector = (store: EditorStorePart) => store[TRANSLATE_EDITOR_PAGE_REDUCER] || initialState;

export const isOpenEditorModalSelector = createSelector(
    editorStoreSelector,
    (state) => state.isOpenModal
);

export const EditorModalDataSelector = createSelector(
    editorStoreSelector,
    (state) => state.modalData
);
