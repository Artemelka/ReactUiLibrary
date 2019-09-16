import mongoose from 'mongoose';

const DB_USER = 'reactKitAdmin';
const DB_PASSWORD = '61406140';
const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0-ahlbz.gcp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(DB_URL, { useNewUrlParser: true })
    .then((db) => {
        console.log('we\'re connected!', db.models.language);
    })
    .catch(error => console.error(error));

export const dictionaryDB = mongoose.connection;


