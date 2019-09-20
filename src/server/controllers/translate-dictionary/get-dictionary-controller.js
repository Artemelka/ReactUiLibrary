import { getDictionary } from '../../services';

export const getDictionaryController = (request, response) => {
    getDictionary()
        .then(data => response.json(data))
        .catch(error => response.send(error));

};
