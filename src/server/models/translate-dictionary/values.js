import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;
const VALUE_COLLECTION_NAME = 'Value';
const localesSchema = new Schema({
    keyId: {
        require: true,
        type: ObjectId
    },
    localeId: {
        require: true,
        type: ObjectId
    },
    value: {
        require: true,
        type: String
    }
});

const LocaleValueModel = mongoose.model(VALUE_COLLECTION_NAME, localesSchema);

export default LocaleValueModel;
