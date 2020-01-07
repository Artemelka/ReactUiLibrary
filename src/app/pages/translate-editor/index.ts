import { connect } from 'react-redux';
import { localizationLabelsSelector } from '../../../services/localization';
import { TranslateEditorPageComponent } from './TranslateEditorPage';

import { LocalizationState } from '../../../services/localization/types';

export const TranslateEditorPage = connect((state: Record<string, any> & LocalizationState) => ({
    labels: localizationLabelsSelector(state)
}), {

})(TranslateEditorPageComponent);
