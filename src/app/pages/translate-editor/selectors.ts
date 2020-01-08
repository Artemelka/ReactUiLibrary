import { TRANSLATE_EDITOR_PAGE_REDUCER, EditorStoreKeys } from './constants';
import { EditorState } from './types';

type AppState = EditorState & Record<string, any>;

export const isOpenEditorModalSelector = (state: AppState): boolean => {
    const editorStore = state[TRANSLATE_EDITOR_PAGE_REDUCER] || {};

    return editorStore[EditorStoreKeys.IS_OPEN_MODAL];
};

export const EditorModalDataSelector = (state: AppState): Record<string, string> => {
    const editorStore = state[TRANSLATE_EDITOR_PAGE_REDUCER] || {};

    return editorStore[EditorStoreKeys.MODAL_DATA];
};
