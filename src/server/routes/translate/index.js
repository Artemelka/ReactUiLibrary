import express from 'express';
import {
    getDictionaryController,
    addDictionaryController,
    addDictionaryKeyController
} from '../../controllers';

export const translate = express.Router();

translate.get('/', getDictionaryController);

translate.post('/dictionary', addDictionaryController);

translate.post('/key', addDictionaryKeyController);

translate.delete('/', (request, response) => {

});
