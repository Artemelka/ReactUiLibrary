import express from 'express';
import { DictionaryController } from '../../controllers';

export const translate = express.Router();

translate.get('/', DictionaryController.getAll);

translate.get('/locales', DictionaryController.getAllLocales);

translate.put('/locales', DictionaryController.changeLocaleStatus);

translate.post('/dictionary', DictionaryController.addLocales);

translate.post('/key', DictionaryController.addKeys);

translate.put('/key', DictionaryController.updateKey);

translate.delete('/', (request, response) => {

});
