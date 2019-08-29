import express from 'express';
import { getUserName } from './get-user-name';
import { translate } from './translate';

const routes = express.Router();

routes.use('/getUserName', getUserName);
routes.use('/translate', translate);

module.exports = routes;
