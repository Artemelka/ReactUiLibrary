import { addDictionaryKey } from '../../services';

export const addDictionaryKeyController = (request, response) => {
    addDictionaryKey(request.body.data.keysData).then(data => response.json(data)).catch(error => response.send(error));
};
