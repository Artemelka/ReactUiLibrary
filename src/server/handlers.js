import { DB_NAME, ProxyParams } from './constants';

export const handleServerStart = error => error
    ? console.error('==== Server not started! ==== ERROR:', error)
    : console.log(`==== Server started on ${ProxyParams.SERVER}`);

export const handleDbConnection = () => console.log(`==== Connected to MongoDB ${DB_NAME}! ====`);

export const handleDbConnectionError = error => console.error('==== MongoDB connected error ====', error);
