import express from 'express';
import { DictionaryController } from '../../controllers';

export const translate = express.Router();

translate.get('/', DictionaryController.getAll);

translate.post('/dictionary', DictionaryController.addLocales);

translate.post('/key', DictionaryController.addKeys);

translate.delete('/', (request, response) => {

});
