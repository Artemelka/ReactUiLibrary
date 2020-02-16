import axios from 'axios';
import { DEFAULT_TIMEOUT, REQUEST_METHOD } from '../../constants';

const { GET } = REQUEST_METHOD;

export type RequestConfig = {
    method?: keyof typeof REQUEST_METHOD;
    timeout?: number;
    data?: Record<string, any>;
};

export const request = (url: string, config: RequestConfig = {}): Promise<any> => {
    const {
        method = GET,
        data,
        timeout = DEFAULT_TIMEOUT,
        ...restConfig
    } = config;

    const options = {
        ...restConfig,
        url,
        method,
        timeout,
        data: method !== GET ? data : {},
        params: method === GET ? data : {}
    };

    return new Promise((resolve, reject) => {
        axios(options)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};
