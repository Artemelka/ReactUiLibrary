import express from 'express';
import { getUserName } from './get-user-name';
// import { translate } from './translate';
import { localization } from './localization';

const routes = express.Router();

routes.use('/getUserName', getUserName);
// routes.use('/translate', translate);
routes.use('/localization', localization);

module.exports = routes;
