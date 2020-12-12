import { EditorState } from './types';

export const TRANSLATE_EDITOR_PAGE_REDUCER = 'translateEditorPage';

export const initialState: EditorState = {
    isOpenModal: false,
    modalData: {}
};
