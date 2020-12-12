import React from 'react';
import { connect } from 'react-redux';
import { localizationLabelsSelector, StoreInjectorConsumer } from 'services';
import { TranslateEditorPageComponent } from './TranslateEditorPage';
import {
    translateEditorPageReducer,
    TRANSLATE_EDITOR_PAGE_REDUCER,
    closeEditorModal,
    openEditorModal,
    EditorModalDataSelector,
    isOpenEditorModalSelector,
    EditorState
} from './redux';
import { AppState } from '../../types';

const TranslateEditorPageReducer = {
    name: TRANSLATE_EDITOR_PAGE_REDUCER,
    reducer: translateEditorPageReducer
};

const asyncReducers = [TranslateEditorPageReducer];

const WrappedComponent = (props: any) => {
    return (
        <StoreInjectorConsumer asyncReducers={asyncReducers} withEjectReducers>
            <TranslateEditorPageComponent {...props}/>
        </StoreInjectorConsumer>
    );
};

export const TranslateEditorPage = connect((state: AppState & EditorState) => ({
    isOpenModal: isOpenEditorModalSelector(state),
    labels: localizationLabelsSelector(state),
    modalData: EditorModalDataSelector(state)
}), {
    closeModal: closeEditorModal,
    openModal: openEditorModal
})(WrappedComponent);
