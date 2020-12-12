import { createSlice } from '@reduxjs/toolkit';
import { initialState, TRANSLATE_EDITOR_PAGE_REDUCER } from './constants';
import { EditorState, TranslateEditorCase } from './types';

export const translateEditorPageSlice = createSlice<EditorState, TranslateEditorCase>({
    name: TRANSLATE_EDITOR_PAGE_REDUCER,
    initialState,
    reducers: {
        closeEditorModal: (state) => {
            state.isOpenModal = false;
        },
        openEditorModal: (state, { payload }) => {
            state.isOpenModal = true;
            state.modalData = payload;
        }
    }
});

export const { closeEditorModal, openEditorModal } = translateEditorPageSlice.actions;
export const translateEditorPageReducer = translateEditorPageSlice.reducer;
