import React from 'react';
import { connect } from 'react-redux';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { localizationLabelsSelector } from 'services';
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
const storeInjectConfig = { reducersToInject: asyncReducers };

const WrappedComponent = (props: any) => {
    return (
        <ReduxStoreLoader storeInjectConfig={storeInjectConfig}>
            <TranslateEditorPageComponent {...props}/>
        </ReduxStoreLoader>
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
