import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import reload from 'express-reload';
import mongoose from 'mongoose';
import { DbConnectParams, DB_URI, ServerParams, KEEP_ALIVE_TIMEOUT } from './constants';

const app = express();
const { PORT, HOST } = ServerParams;
const path = __dirname + '/routes/';
const listenCallback = error => error
    ? console.error('Server not started! ERROR:', error)
    : console.log(`Server started on port ${PORT}!`);
const handleDbConnection = () => console.log('Connected to MongoDB!');
const handleDbConnectionError = error => console.error('MongoDB connected error', error)

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(fileUpload());
app.use(express.static('dist'));
app.use('/api', reload(path));

const appServer = app.listen(PORT, HOST, listenCallback);
appServer.keepAliveTimeout = KEEP_ALIVE_TIMEOUT;

mongoose.connect(DB_URI, DbConnectParams)
    .then(handleDbConnection)
    .catch(handleDbConnectionError);


