import express from 'express';
import { getUserName } from './get-user-name';
import { localization } from './localization';

const routes = express.Router();

routes.use('/getUserName', getUserName);
routes.use('/localization', localization);

module.exports = routes;
