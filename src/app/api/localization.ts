import { request } from '../utils';
import { API_URL } from './constants';

export const getLabels = (activeLocale: string) => request(API_URL.GET_LABELS, { data: { activeLocale } });
export const getLocales = () => request(API_URL.GET_LOCALES);
export const getAllDictionary = () => request(API_URL.GET_ALL_DICTIONARY);
