import React from 'react';
import { connect } from 'react-redux';
import { localizationLabelsSelector } from '@artemelka/react-localization';
import { StoreInjectorConsumer } from '@artemelka/redux-store-injector';
import { TranslateEditorPageComponent } from './TranslateEditorPage';
import {
    translateEditorPageReducer,
    TRANSLATE_EDITOR_PAGE_REDUCER,
    closeEditorModal,
    openEditorModal,
    EditorModalDataSelector,
    isOpenEditorModalSelector
} from './redux';
import { EditorStorePart } from './redux';

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

export const TranslateEditorPage = connect((state: EditorStorePart) => ({
    isOpenModal: isOpenEditorModalSelector(state),
    labels: localizationLabelsSelector(state),
    modalData: EditorModalDataSelector(state)
}), {
    closeModal: closeEditorModal,
    openModal: openEditorModal
})(WrappedComponent);
