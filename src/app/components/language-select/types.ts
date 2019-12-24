import { LocalizationAction } from '../../../services/localization/types';

export interface LanguageSelectProps {
    activeLocale: string;
    changeLocale: (locale: string) => LocalizationAction<string>;
    options: Array<{ value: string, title: string }>;
}
