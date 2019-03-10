import express from 'express';
import { getUserName } from './get-user-name';

const routes = express.Router();

routes.use('/getUserName', getUserName);

module.exports = routes;