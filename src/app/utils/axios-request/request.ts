import axios from 'axios';
import { DEFAULT_TIMEOUT, REQUEST_METHOD } from '../../constants';

const { GET, POST } = REQUEST_METHOD;

export const request = (url: string, config: Record<string, any> = {}): Promise<any> => {
    const {
        method = GET,
        data,
        timeout = DEFAULT_TIMEOUT,
        ...restConfig
    } = config;
    const requestData = method !== GET ? {data} : {};

    const options = {
        url,
        method,
        timeout,
        data: requestData,
        ...restConfig
    };

    return new Promise((resolve, reject) => {
        axios(options)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
};
