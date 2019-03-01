const ONE_MINUTE = 60000;
export const KEEP_ALIVE_TIMEOUT = ONE_MINUTE * 2;

export const ServerParams = {
    PORT: 8080,
    HOST: 'localhost'
};

export const ProxyParams = {
    URL: ['/api/**'],
    SERVER: `http://localhost:${ServerParams.PORT}`
};

