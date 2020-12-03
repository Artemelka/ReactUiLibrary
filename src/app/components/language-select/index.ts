import { connect } from 'react-redux';
import { Select } from 'elements';
import { localizationActiveLocaleSelector } from 'services/localization';
import { injectReducersAndSagas } from '../../application/redux';
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

export const LanguageSelect = connect((state: AppState) => ({
    value: localizationActiveLocaleSelector(state),
    options: languageSelectOptionsSelector(state)
}), {
    onChange: changeLocaleActionSaga
})(injectReducersAndSagas({ asyncSagas })(Select));
