import AxiosMockAdapter from 'axios-mock-adapter';
import { API_URL } from '../constants';
import { HTTP_STATUSES } from '../../constants';
import dictionary from './dictionary.json';

type Request = {
    params: {
        activeLocale: string
    }
};

const DB: Record<string, Record<string, string>> = { ...dictionary };
const locales = Object.keys(DB);

export const mockLocalizationRequest = (mock: AxiosMockAdapter) => {
    mock.onGet(API_URL.GET_ALL_DICTIONARY).reply(HTTP_STATUSES.OK, DB);
    mock.onGet(API_URL.GET_LABELS).reply(({ params: { activeLocale } }: Request) => ([HTTP_STATUSES.OK, DB[activeLocale]]));
    mock.onGet(API_URL.GET_LOCALES).reply(HTTP_STATUSES.OK, locales)
};
