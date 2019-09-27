import { LocaleKeyModel as KeyModel, LocaleModel, LocaleValueModel as ValueModel } from '../models';
import { createNewValues, getAllDictionaryData, getDictionaryValues } from './dictionary-utils';
import { handleErrorCreator } from '../handlers';

const updateOptions = {
    new: true,
    useFindAndModify: false
};

const DictionaryController = {
    addLocales: (request, response) => {
        const { data: dictionary } = request.body;
        const locales = Object.keys(dictionary);
        const dictionaryKeys = Object.keys(dictionary[locales[0]]).map(name => ({ name }));

        LocaleModel.insertMany(locales.map(locale => ({ enabled: true, name: locale })))
            .then(dbLocale => KeyModel.insertMany(dictionaryKeys)
                .then(dbKeys => ValueModel.insertMany(getDictionaryValues(dbLocale, dbKeys, dictionary))
                    .then(dbValues => response.json(getAllDictionaryData(dbLocale, dbKeys, dbValues)))
                    .catch(handleErrorCreator('error insert values', response)))
                .catch(
                    handleErrorCreator('error insert keys', response)
                ))
            .catch(
                handleErrorCreator('error insert locales', response)
            )
    },
    addKeys: (request, response) => {
        request.body.data.keys.forEach(({keyName, locales}) => { KeyModel.insertMany([{ name: keyName}])
            .then(([dbKey]) => { LocaleModel.find({})
                .then( dbLocales => { ValueModel.insertMany(createNewValues(locales, dbLocales, dbKey._id))
                    .then(nextValues => response.json([keyName, nextValues.map(value => ({ value }))]))
                    .catch(handleErrorCreator('error update value', response));
                }).catch(handleErrorCreator('error find value', response))
            }).catch(handleErrorCreator('error find key', response))
        })
    },
    changeLocaleStatus: (request, response) => {
        const { data } = request.body;

        LocaleModel.findOneAndUpdate(
            { _id: data._id },
            {
                enabled: data.enabled,
                name: data.name
            },
            updateOptions
        )
            .then(locale => response.json(locale))
            .catch(handleErrorCreator('error find locale', response))

    },
    getAll: (request, response) => { LocaleModel.find({ enabled: true })
        .then(dbLocales => { KeyModel.find({})
            .then(dbKeys => { ValueModel.find({})
                .then(dbValues => { response.json(getAllDictionaryData(dbLocales, dbKeys, dbValues)) })
                .catch(handleErrorCreator('error get values', response))
            }).catch(handleErrorCreator('error get keys', response))
        }).catch(handleErrorCreator('error get locales', response))
    },
    getAllLocales: (request, response) => {
        LocaleModel.find({})
            .then(dbLocales => response.json(dbLocales))
            .catch(handleErrorCreator('error find locales', response))
    },
    updateKey: (request, response) => {
        const { data } = request.body;

        data.keys.forEach(({keyName, locales}) => {
            KeyModel.find({ name: keyName})
                .then(([dbKey]) => {
                    Promise.all(
                        Object.entries(locales).map(([name, value]) =>
                            LocaleModel.find({ name })
                                .then(([dbLocale]) =>
                                    ValueModel.findOneAndUpdate({
                                        keyId: dbKey._id,
                                        localeId: dbLocale._id
                                    },
                                    { value },
                                    updateOptions))
                                .catch(handleErrorCreator('error find locale', response)))
                    )
                        .then(result => response.json(result.map(({ value }) => ({ keyName, value }))))
                        .catch(handleErrorCreator('error update values', response));
                }).catch(handleErrorCreator('error find key', response))
        });
    }
};

export default DictionaryController;
