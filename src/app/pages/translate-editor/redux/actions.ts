import { TRANSLATE_EDITOR_ACTIONS } from './constants';
import { EditorAction } from './types';

export const openEditorModal = (modalData: Record<string, string>): EditorAction<Record<string, string>> => ({
    type: TRANSLATE_EDITOR_ACTIONS.OPEN_EDITOR_MODAL,
    payload: modalData
});

export const closeEditorModal = (): EditorAction => ({ type: TRANSLATE_EDITOR_ACTIONS.CLOSE_EDITOR_MODAL });
