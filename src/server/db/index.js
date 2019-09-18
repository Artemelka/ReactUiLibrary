import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema;
const COLLECTION_NAME = 'translate_dictionary';
const translateDictionarySchema = new Schema({
    id: ObjectId,
    locale: String,
    enabled: Boolean,
    dictionary: Object
});
const TranslateDictionary = mongoose.model(COLLECTION_NAME, translateDictionarySchema, COLLECTION_NAME);

const formatDictionary = (data) => {
    return data.reduce((result, item) => {
        if (item.enabled) {
            result[item.locale] = item.dictionary;
        }

        return result;
    }, {})
};

export const getDictionary = () => new Promise((resolve, reject) =>
    TranslateDictionary.find({})
        .exec((error, data) =>
            error
                ? reject(error)
                : resolve(formatDictionary(data)))
);

export const addDictionary = (arrData) => new Promise((resolve, reject) => {
    arrData.map(collectionItem => {
        const localeDictionary = new TranslateDictionary({
            locale: collectionItem.locale,
            enabled: true,
            dictionary: collectionItem.dictionary
        });

        localeDictionary.save(error => {
            if (error) {
                return console.log('save error', error);
            }

            console.log('saved');
        });
    });

    getDictionary().then(value => resolve(value)).catch(error => reject(error))

});



