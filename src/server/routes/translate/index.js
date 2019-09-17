import express from 'express';
import { DictionaryKey } from '../../db';
import dictionary from './dictionary.json';

export const translate = express.Router();

translate.get('/', (request, response) => {

    DictionaryKey.find({}).exec((error, data) => {
        if (error) {
            console.log('======= error DictionaryKey =========', error);
        } else {
            console.log('======= response DictionaryKey =========', data);
        }
    });

    return response.json(dictionary);
});

translate.post('/:id', (request, response) => {

});

translate.put('/:id', (request, response) => {

});

translate.delete('/:id', (request, response) => {

});
