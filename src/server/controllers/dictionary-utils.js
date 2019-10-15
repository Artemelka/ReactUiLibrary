import { isEqualDbId } from '../utils';

export const createNewValues = (locales, dbLocales, keyId) =>
    Object.entries(locales).map(([localeName, value]) => ({
        localeId: dbLocales.find(({name}) => name === localeName)._id,
        keyId: keyId,
        value
    }));

export const getAllDictionaryData = (localeCollection, keyCollection, valueCollection) =>
    localeCollection.reduce((result, locale) => {
        result[locale.name] = {};

        keyCollection.forEach(key => {
            const valueItem = valueCollection.filter(({ localeId, keyId}) =>
                isEqualDbId(localeId, locale._id) && isEqualDbId(keyId, key._id));

            result[locale.name][key.name] = valueItem[0] ? valueItem[0].value : ''
        });

        return result;
    }, {});

export const getDictionaryValues = (dbLocaleCollection, keysCollection, dictionary) =>
    dbLocaleCollection.reduce((result, dbLocale) => {
        keysCollection.map(key => {result.push({
            localeId: dbLocale._id,
            keyId: key._id,
            value: dictionary[dbLocale.name][key.name]
        })});
        return result;
    }, []);


