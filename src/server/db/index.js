import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema;
const data = {
    id: ObjectId,
    key: String
};

const keySchema = new Schema(data);

export const DictionaryKey = mongoose.model('key', keySchema, 'key');



