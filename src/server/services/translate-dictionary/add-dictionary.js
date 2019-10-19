import { TranslateDictionaryModel } from '../../models';

export const addDictionary = (arrData) => new Promise((resolve, reject) =>
    TranslateDictionaryModel.insertMany(arrData.map(collectionItem => ({
        locale: collectionItem.locale,
        enabled: true,
        dictionary: collectionItem.dictionary
    })))
        .then(result => resolve(result))
        .catch(error => reject(error)));
