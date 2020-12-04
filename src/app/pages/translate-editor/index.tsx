import React from 'react';
import { connect } from 'react-redux';
import { localizationLabelsSelector } from 'services';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { TranslateEditorPageComponent } from './TranslateEditorPage';
import { StoreLoader } from '../../application/inject-redusers-and-sagas';
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
        <StoreLoader storeInjectConfig={storeInjectConfig}>
            <TranslateEditorPageComponent {...props}/>
        </StoreLoader>
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
