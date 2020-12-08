import { AnyAction } from 'redux';
import { initialState, TRANSLATE_EDITOR_ACTIONS, EditorStoreKeys } from './constants';
import { EditorState } from './types';

export const translateEditorPageReducer = (state: EditorState = initialState, { payload, type }: AnyAction) => {
    switch (type) {
        case TRANSLATE_EDITOR_ACTIONS.CLOSE_EDITOR_MODAL:
            return ({
                ...state,
                [EditorStoreKeys.IS_OPEN_MODAL]: false,
            });
        case TRANSLATE_EDITOR_ACTIONS.OPEN_EDITOR_MODAL:
            return ({
                ...state,
                [EditorStoreKeys.IS_OPEN_MODAL]: true,
                [EditorStoreKeys.MODAL_DATA]: payload
            });
        default:
            return state;
    }
};
