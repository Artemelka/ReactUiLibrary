import { SelectOptions } from '../../elements/inputs/select/types';
import { translate } from '../../../services/translate';

export const getTranslatedOptions = (options: Array<SelectOptions>) =>
    options.map((item: SelectOptions) => ({
        ...item,
        title: translate(item.title)
    }));
