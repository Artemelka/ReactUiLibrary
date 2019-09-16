import mongoose, { Schema } from 'mongoose';

const keySchema = new Schema({
    key: String,
    locale: {
        ru_RU: Schema.ObjectId,
        en_EN: Schema.ObjectId
    }
});

const ruLocaleSchema = new Schema({
    key: String
});

export const DictionaryKey = mongoose.model('Key', keySchema);
export const RuLocale = mongoose.model('ru_RU', ruLocaleSchema);


