import { translate } from './translate';
import dictionary from '../../dictionary.json';

export { translateReducer } from './reducer';
export { changeLocale } from './actions';
export const TranslateComponent = translate(dictionary);
