import { SelectOptions } from '../../elements/inputs/select/types';
import { NavigatorLanguage } from '../../../services/translate';

export const SELECT_WIDTH = 150;
export const selectOptions: Array<SelectOptions> = [
    {
        value: NavigatorLanguage.RU,
        title: 'russian-language'
    }, {
        value: NavigatorLanguage.EN,
        title: 'english-language'
    }
];
