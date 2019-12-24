import { connect } from 'react-redux';
import { LanguageSelectComponent } from './LanguageSelect';
import { localizationActiveLocaleSelector } from '../../../services/localization';
import { languageSelectOptionsSelector } from './selectors';
import { changeLocaleActionCreator } from './actions';
import { LocalizationState } from '../../../services/localization/types';

export const LanguageSelect = connect((state: Record<string, any> & LocalizationState) => ({
    activeLocale: localizationActiveLocaleSelector(state),
    options: languageSelectOptionsSelector(state)
}), {
    changeLocale: changeLocaleActionCreator,
})(LanguageSelectComponent);
