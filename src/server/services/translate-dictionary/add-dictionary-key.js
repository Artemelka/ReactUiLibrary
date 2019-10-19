import { TranslateDictionaryModel } from '../../models';

export const addDictionaryKey = (keysData) => Promise.all(
    keysData.map(({keyName, locales}) =>
        locales.map(({localeName, value}) =>
            TranslateDictionaryModel.findOneAndUpdate({locale: localeName})
                .then(dictionary => {
                    dictionary.dictionary.push({ [keyName]: value });
                })))
);
