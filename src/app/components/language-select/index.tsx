import React from 'react';
import { connect } from 'react-redux';
import { localizationActiveLocaleSelector } from '@artemelka/react-localization';
import { StoreInjectorConsumer } from 'services';
import { Select } from 'elements';
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

const WrappedSelect = (props: any) => {
    return (
        <StoreInjectorConsumer asyncSagas={asyncSagas}>
            <Select {...props}/>
        </StoreInjectorConsumer>
    );
};

export const LanguageSelect = connect((state: AppState) => ({
    value: localizationActiveLocaleSelector(state),
    options: languageSelectOptionsSelector(state)
}), {
    onChange: changeLocaleActionSaga
})(WrappedSelect);
