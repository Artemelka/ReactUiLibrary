import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;
const VALUE_COLLECTION_NAME = 'Value';

const localesSchema = new Schema({
    localeId: {
        type: ObjectId,
        require: true
    },
    keyId: {
        type: ObjectId,
        require: true
    },
    value: {
        type: String,
        require: true
    },
});

const LocaleValueModel = mongoose.model(VALUE_COLLECTION_NAME, localesSchema);

export default LocaleValueModel;
