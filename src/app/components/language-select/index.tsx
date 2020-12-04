import React from 'react';
import { connect } from 'react-redux';
import { Select } from 'elements';
import { localizationActiveLocaleSelector } from 'services/localization';
// import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { StoreLoader } from '../../application/inject-redusers-and-sagas';
import { AppState } from '../../types';
import {
    languageSelectOptionsSelector,
    changeLocaleActionSaga,
    GET_LABELS_WATCHER_SAGA_NAME,
    getLabelsWatcherSaga
} from './redux';

const asyncSagas = [{
    name: GET_LABELS_WATCHER_SAGA_NAME,
    saga: getLabelsWatcherSaga
}];
const storeInjectConfig = { sagasToInject: asyncSagas};

const WrappedSelect = (props: any) => {
    return (
        <StoreLoader storeInjectConfig={storeInjectConfig}>
            <Select {...props}/>
        </StoreLoader>
    );
};

export const LanguageSelect = connect((state: AppState) => ({
    value: localizationActiveLocaleSelector(state),
    options: languageSelectOptionsSelector(state)
}), {
    onChange: changeLocaleActionSaga
})(WrappedSelect);
