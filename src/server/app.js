import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import reload from 'express-reload';
import { ServerParams, KEEP_ALIVE_TIMEOUT } from './constants';

const app = express();
const { PORT, HOST } = ServerParams;
const path = __dirname + '/routes/';
const listenCallback = error => error
    ? console.log('something bad happened', error)
    : console.log(`Listening on port ${PORT}!`);

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(fileUpload());
app.use(express.static("dist"));
app.use('/api', reload(path));

const appServer = app.listen(PORT, HOST, listenCallback);

appServer.keepAliveTimeout = KEEP_ALIVE_TIMEOUT;
