import { TRANSLATE_EDITOR_PAGE_REDUCER } from './constants';
import { AppState } from '../../../types';

export type EditorState = {
    isOpenModal: boolean,
    modalData: Record<string, string>
};

export type EditorStorePart = AppState & {[TRANSLATE_EDITOR_PAGE_REDUCER]: EditorState};

export type TranslateEditorCase = {
    closeEditorModal: (state: EditorState) => void;
    openEditorModal: (state: EditorState, payload: Record<string, any>) => void;
};
