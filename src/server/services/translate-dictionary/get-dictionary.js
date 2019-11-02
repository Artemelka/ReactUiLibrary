import { TranslateDictionaryModel } from '../../models';
import { formatDictionary } from './utils';

export const getDictionary = () => new Promise((resolve, reject) =>
    TranslateDictionaryModel.find({})
        .then(data => resolve(formatDictionary(data)))
        .catch(error => reject(error)));
