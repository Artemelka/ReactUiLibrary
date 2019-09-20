import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;
const COLLECTION_NAME = 'translate_dictionary';
const dictionarySchema = new Schema({
    id: ObjectId,
    locale: String,
    enabled: Boolean,
    dictionary: Object
});

export const TranslateDictionaryModel = mongoose.model(COLLECTION_NAME, dictionarySchema, COLLECTION_NAME);
