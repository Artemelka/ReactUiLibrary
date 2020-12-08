import React from 'react';
import { connect } from 'react-redux';
import { ReduxStoreLoader } from '@wildberries/redux-core-modules';
import { Select } from 'elements';
import { localizationActiveLocaleSelector } from 'services/localization';
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
        <ReduxStoreLoader storeInjectConfig={storeInjectConfig}>
            <Select {...props}/>
        </ReduxStoreLoader>
    );
};

export const LanguageSelect = connect((state: AppState) => ({
    value: localizationActiveLocaleSelector(state),
    options: languageSelectOptionsSelector(state)
}), {
    onChange: changeLocaleActionSaga
})(WrappedSelect);
