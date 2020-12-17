import { createSelector } from 'reselect';
import { localizationLabelsSelector, localizationLocalesSelector } from '@artemelka/react-localization';
import { selectOptions } from '../constants';

export const languageSelectOptionsSelector = createSelector(
    localizationLabelsSelector,
    localizationLocalesSelector,
    (labels: Record<string, string>, locales: Array<string>) =>
        locales.map(locale => ({ value: locale, title: labels[selectOptions[locale]] || locale }))
);
