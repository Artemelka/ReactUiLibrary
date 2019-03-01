import express from 'express';
import { getUserName } from './get-user-name';

export const routes = express.Router();

routes.use('/getUserName', getUserName);