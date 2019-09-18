import express from 'express';
import { getDictionary, addDictionary } from '../../db';
import dictionary from './dictionary.json';

export const translate = express.Router();

const test = Object.keys(dictionary).map(key => ({ locale: key, dictionary: dictionary[key]}));

translate.get('/', (request, response) => {
    getDictionary()
        .then(data => response.json(data))
        .catch(error => response.send({STATUS: 503}));

});

translate.post('/dictionary', (request, response) => {
    console.log('translate post', request.body);
    response.send({STATUS: 200});
    // addDictionary(test)
    //     .then((value => response.json(value)))
    //     .catch(error => response.send({STATUS: 503}));
});

translate.put('/', (request, response) => {

});

translate.delete('/', (request, response) => {

});
