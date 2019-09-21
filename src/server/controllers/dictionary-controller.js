import { LocaleKeyModel, LocaleModel, LocaleValueModel } from '../models';
import dictionary from '../routes/translate/dictionary.json';

const getDictionaryValues = (dbLocaleCollection, keysCollection, dictionary) =>
    dbLocaleCollection.reduce((result, dbLocale) => {
        keysCollection.map(key => {result.push({
            localeId: dbLocale._id,
            keyId: key._id,
            value: dictionary[dbLocale.name][key.name]
        })});
        return result;
    }, []);

const getAllDictionary = (localeCollection, keyCollection, valueCollection) =>
    localeCollection.reduce((result, locale) => {
         keyCollection.map(key => {
             result[locale.name][key.name] = valueCollection.filter((item) => {
                 return item.localeId.toString() === locale._id.toString() && item.keyId.toString() === key._id.toString();
             }).value;
         });

        return result;
}, {});

const handleErrorCreator = (text, response) => error => {
    console.error(text, error);
    response.sendStatus(503)
};

const DictionaryController = {
    addLocales: (request, response) => {
        // const dictionary = request.body.data;
        const locales = Object.keys(dictionary);
        const arrLocales = locales.map(locale => ({ enabled: true, name: locale }));
        const dictionaryKeys = Object.keys(dictionary[locales[0]]).map(keyName => ({ name: keyName}));

        LocaleModel.insertMany(arrLocales)
            .then(dbLocaleCollection => LocaleKeyModel.insertMany(dictionaryKeys)
                .then(keysCollection => {
                    LocaleValueModel.insertMany(
                        getDictionaryValues(dbLocaleCollection, keysCollection, dictionary)
                    )
                        .then(dbValues =>
                            response.json(getAllDictionary(dbLocaleCollection, keysCollection, dbValues))
                        ).catch(handleErrorCreator('error insert values', response))
                }).catch(handleErrorCreator('error insert keys', response))
        ).catch(handleErrorCreator('error insert locales', response))
    },
    addKeys: (request, response) => {
        request.body.data.keys.map(({keyName, locales}) => {
            LocaleKeyModel.insertMany([{ name: keyName}])
                .then(([dbKey]) => {
                    LocaleModel.find({}).then( dbLocales => {
                        LocaleValueModel.insertMany(
                            Object.entries(locales).map(([localeName, value]) => ({
                                localeId: dbLocales.filter(locale => locale.name === localeName)[0]._id,
                                keyId: dbKey._id,
                                value
                            }))
                        )
                        .then(nextValues => response.json([keyName, nextValues]))
                        .catch(handleErrorCreator('error update value', response));

                    })
                })
                .catch(handleErrorCreator('error find key', response))
        })
    },
    getAll: (request, response) => {
        LocaleModel.find({})
            .then(dbLocales => {
                LocaleKeyModel.find({})
                    .then(dbKeys => {
                        LocaleValueModel.find({})
                            .then(dbValues => {
                                response.json(getAllDictionary(dbLocales, dbKeys, dbValues))
                            })
                            .catch(handleErrorCreator('error get values', response))
                    })
                    .catch(handleErrorCreator('error get keys', response))
            })
            .catch(handleErrorCreator('error get locales', response))
    }
};

export default DictionaryController;
