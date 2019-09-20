import { addDictionary } from '../../services';
import dictionary from '../../routes/translate/dictionary.json';

const test = Object.keys(dictionary).map(key => ({ locale: key, dictionary: dictionary[key]}));

export const addDictionaryController = (request, response) => {
    console.log('translate post', request.body.data);

    addDictionary(test)
        .then((value => response.json(value)))
        .catch(error => response.send(error));
};
