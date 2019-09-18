import express from 'express';
import { getDictionary } from '../../db';
// import dictionary from './dictionary.json';

export const translate = express.Router();

translate.get('/', (request, response) => {
    getDictionary()
        .then(data => response.json(data))
        .catch(error => response.send({STATUS: 503}));

});

translate.post('/', (request, response) => {

});

translate.put('/', (request, response) => {

});

translate.delete('/', (request, response) => {

});
