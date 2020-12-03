import { request } from 'utils';
import { RequestConfig } from '../../utils/axios-request/request';

interface RequestParams {
    url: string;
    config?: RequestConfig;
}

const TEST_URL = '/api/getUsername';

export const requestGetParams = { url: TEST_URL };
export const concatUrl = (url: string, queryParams?: string): string => queryParams ? `${url}?${queryParams}` : url;
export const getPostConfig = (userName: string): RequestParams => ({
    ...requestGetParams,
    config: {
        method: 'POST',
        data: { userName }
    }
});
export const requestWrapper = ({ url, config }: RequestParams, params?: string) =>
    request(concatUrl(url, params), config)
        .then(data => data)
        .catch(requestError => console.log(requestError));
