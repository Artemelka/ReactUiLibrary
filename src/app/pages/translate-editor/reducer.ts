import { AnyAction } from 'redux';
import { initialState, TRANSLATE_EDITOR_ACTIONS, EditorStoreKeys } from './constants';
import { EditorState } from './types';

const openModal = (state: EditorState, payload: Record<string, string>): EditorState => ({
    ...state,
    [EditorStoreKeys.IS_OPEN_MODAL]: true,
    [EditorStoreKeys.MODAL_DATA]: payload
});

const closeModal = (state: EditorState): EditorState => ({
    ...state,
    [EditorStoreKeys.IS_OPEN_MODAL]: false,
});

export const translateEditorPageReducer = (state: EditorState = initialState, { payload, type }: AnyAction) => {
    switch (type) {
        case TRANSLATE_EDITOR_ACTIONS.CLOSE_EDITOR_MODAL:
            return closeModal(state);
        case TRANSLATE_EDITOR_ACTIONS.OPEN_EDITOR_MODAL:
            return openModal(state, payload);
        default:
            return state;
    }
};
