import express from 'express';
import dictionary from './dictionary.json';

export const translate = express.Router();

translate.get('/', (request, response) => {

    return response.json(dictionary);
});
