import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;
const KEY_COLLECTION_NAME = 'Key';

const localesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
});

const LocaleKeyModel = mongoose.model(KEY_COLLECTION_NAME, localesSchema);

export default LocaleKeyModel;
