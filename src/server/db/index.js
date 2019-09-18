import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema;
const translateDictionaryData = {
    id: ObjectId,
    locale: String,
    enabled: Boolean,
    dictionary: Object
};

const translateDictionarySchema = new Schema(translateDictionaryData);

const TranslateDictionary = mongoose.model('translate_dictionary', translateDictionarySchema, 'translate_dictionary');

const formatDictionary = (data) => {
    return data.reduce((result, item) => {
        if (item.enabled) {
            result[item.locale] = item.dictionary;
        }

        return result;
    }, {})
};

export const getDictionary = () => {
    return new Promise((resolve, reject) => {
        TranslateDictionary.find({}).exec((error, data) => {
            if (error) {
                console.log('======= error DictionaryKey =========', error);
                reject(error);
            } else {
                resolve(formatDictionary(data));
            }
        });
    });

};



