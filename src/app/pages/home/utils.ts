import { request } from '../../../services';

interface RequestData {
    userName: string;
}
interface Config {
    method: string;
    data: RequestData;
}
interface RequestParams {
    url: string;
    config?: Config;
}

const TEST_URL = '/api/getUsername';

export const requestGetParams = { url: TEST_URL };
export const concatUrl = (url: string, queryParams?: string): string => queryParams ? `${url}?${queryParams}` : url;
export const getPostConfig = (userName: string) => ({
    ...requestGetParams,
    config: {
        method: 'POST',
        data: { userName }
    }
});
export const requestWrapper = ({ url, config }: RequestParams, params?: string) =>
    request(concatUrl(url, params), config)
        .then(data => console.log('persons', data))
        .catch(requestError => console.log(requestError));
