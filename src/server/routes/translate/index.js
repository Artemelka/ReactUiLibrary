import express from 'express';
import { DictionaryKey, RuLocale } from '../../db';
import dictionary from './dictionary.json';

export const translate = express.Router();

translate.get('/', (request, response) => {

    DictionaryKey.find({}, null, null, (error, data) => console.log('======= response DictionaryKey =========', data));
    RuLocale.find({}, null, null, (error, data) => console.log('======= response RuLocale =========', data));

    return response.json(dictionary);
});

translate.post('/:id', (request, response) => {

});

translate.put('/:id', (request, response) => {

});

translate.delete('/:id', (request, response) => {

});
