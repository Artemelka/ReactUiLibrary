import mongoose, { Schema } from 'mongoose';

const KEY_COLLECTION_NAME = 'Key';
const localesSchema = new Schema({
    name: {
        required: true,
        type: String,
        unique: true
    }
});

const LocaleKeyModel = mongoose.model(KEY_COLLECTION_NAME, localesSchema);

export default LocaleKeyModel;
