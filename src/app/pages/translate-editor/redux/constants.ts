import { nameSpaceCreator } from 'services';
import { EditorState, TranslateEditorActionsName } from './types';

export const TRANSLATE_EDITOR_PAGE_REDUCER = 'translateEditorPage';

export enum EditorStoreKeys {
    IS_OPEN_MODAL = 'isOpenModal',
    MODAL_DATA = 'modalData'
}

export enum EditorActionsName {
    OPEN_EDITOR_MODAL = 'OPEN_EDITOR_MODAL',
    CLOSE_EDITOR_MODAL = 'CLOSE_EDITOR_MODAL'
}

export const initialState: EditorState = {
    [EditorStoreKeys.IS_OPEN_MODAL]: false,
    [EditorStoreKeys.MODAL_DATA]: {}
};

export const TRANSLATE_EDITOR_ACTIONS: TranslateEditorActionsName = nameSpaceCreator<TranslateEditorActionsName>(`@@${TRANSLATE_EDITOR_PAGE_REDUCER}`)([
    EditorActionsName.OPEN_EDITOR_MODAL,
    EditorActionsName.CLOSE_EDITOR_MODAL
]);
