import { EditorStoreKeys, EditorActionsName } from './constants';

export type EditorState = {
    [EditorStoreKeys.IS_OPEN_MODAL]: boolean,
    [EditorStoreKeys.MODAL_DATA]: Record<string, string>
};

export type TranslateEditorActionsName = {
    [EditorActionsName.CLOSE_EDITOR_MODAL]: string,
    [EditorActionsName.OPEN_EDITOR_MODAL]: string
};

export type EditorAction<T = null> = {
    payload?: T,
    type: string
};
