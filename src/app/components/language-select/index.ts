import { connect } from 'react-redux';
import { Select } from '../../elements';
import { localizationActiveLocaleSelector } from '../../../services/localization';
import { languageSelectOptionsSelector } from './selectors';
import { changeLocaleActionCreator } from './actions';
import { AppState } from '../../types';

export const LanguageSelect = connect((state: AppState) => ({
    value: localizationActiveLocaleSelector(state),
    options: languageSelectOptionsSelector(state)
}), {
    onChange: changeLocaleActionCreator,
})(Select);
