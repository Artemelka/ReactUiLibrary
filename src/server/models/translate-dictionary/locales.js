import mongoose, { Schema } from 'mongoose';

const { ObjectId } = Schema.Types;
const LOCALE_COLLECTION_NAME = 'Locale';

const localesSchema = new Schema({
    enabled: Boolean,
    name: {
        type: String,
        required: true,
        unique: true
    },
});

const LocaleModel = mongoose.model(LOCALE_COLLECTION_NAME, localesSchema);

export default LocaleModel;
