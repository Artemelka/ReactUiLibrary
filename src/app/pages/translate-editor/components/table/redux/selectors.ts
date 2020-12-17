import { createSelector } from 'reselect';
import {
    localizationDictionarySelector,
    localizationLabelsSelector,
    localizationActiveLocaleSelector
} from '@artemelka/react-localization';

export const editorTableRowSelector = createSelector(
    localizationDictionarySelector,
    localizationActiveLocaleSelector,
    (dictionary: Record<string, Record<string, string>>, locale: string): Array<Array<string>> => {
        const labels = dictionary[locale] || {};

        return Object.keys(labels).map(key => [
            key,
            ...Object.keys(dictionary).map(locale => dictionary[locale][key])
        ]);
    }
);

export const editorTableHeaderRowSelector = createSelector(
    localizationDictionarySelector,
    localizationLabelsSelector,
    (dictionary: Record<string, Record<string, string>>, labels: Record<string, string>): Array<string> =>
        [ labels.key || 'key', ...Object.keys(dictionary)]
);
