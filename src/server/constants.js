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

export const DbUserParams = {
    USER: 'reactKitAdmin',
    PASSWORD: '61406140'
};
const DB_URL_PARAMS = 'retryWrites=true&w=majority';
const DB_HOST = '@cluster0-ahlbz.gcp.mongodb.net';
const DB_NAME = 'language';
// const DB_NAME = 'test';

export const DB_URL = `mongodb+srv://${DbUserParams.USER}:${DbUserParams.PASSWORD}${DB_HOST}/${DB_NAME}?${DB_URL_PARAMS}`;
export const DB_URL_CUT = `mongodb://${DbUserParams.USER}:${DbUserParams.PASSWORD}${DB_HOST}/${DB_NAME}`;
