import { request } from '../utils';

const NAMESPACE_API = 'api';
const LOCALIZATION_SERVICE = 'localization';

const API_URL = {
    GET_ALL_DICTIONARY: `/${NAMESPACE_API}/${LOCALIZATION_SERVICE}/dictionary`,
    GET_LABELS: `/${NAMESPACE_API}/${LOCALIZATION_SERVICE}/labels`,
    GET_LOCALES: `/${NAMESPACE_API}/${LOCALIZATION_SERVICE}/locales`
};

export const getLabels = (activeLocale: string) => request(API_URL.GET_LABELS, { data: { activeLocale } });
export const getLocales = () => request(API_URL.GET_LOCALES);
export const getAllDictionary = () => request(API_URL.GET_ALL_DICTIONARY);
