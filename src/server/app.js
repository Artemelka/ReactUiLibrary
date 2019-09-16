import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import reload from 'express-reload';
import mongoose from 'mongoose';
import { DB_URL, DB_URL_CUT, ServerParams, KEEP_ALIVE_TIMEOUT } from './constants';

const app = express();
const { PORT, HOST } = ServerParams;
const path = __dirname + '/routes/';
const listenCallback = error => error
    ? console.log('something bad happened', error)
    : console.log(`Listening on port ${PORT}!`);

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(fileUpload());
app.use(express.static('dist'));
app.use('/api', reload(path));

const appServer = app.listen(PORT, HOST, listenCallback);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to DB!'))
    .catch(error => console.error(error));

appServer.keepAliveTimeout = KEEP_ALIVE_TIMEOUT;
