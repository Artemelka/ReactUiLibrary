import express from 'express';
import fileUpload from 'express-fileupload';
import reload from 'express-reload';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { handleServerStart, handleDbConnection, handleDbConnectionError} from './handlers';
import { API_PATH, DB_URI, DbConnectParams, KEEP_ALIVE_TIMEOUT, RELOAD_API_PATH, ServerParams } from './constants';

const { PORT, HOST } = ServerParams;
const app = express();
const startServer = () => Promise.resolve(app.listen(PORT, HOST, handleServerStart));
const setKeepAliveTimeout = server => {
    server.keepAliveTimeout = KEEP_ALIVE_TIMEOUT;
    return Promise.resolve(server);
};

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(fileUpload());
app.use(express.static('dist'));
app.use(API_PATH, reload(RELOAD_API_PATH));

mongoose.connect(DB_URI, DbConnectParams)
    .then(handleDbConnection)
    .then(startServer)
    .then(setKeepAliveTimeout)
    .catch(handleDbConnectionError);





