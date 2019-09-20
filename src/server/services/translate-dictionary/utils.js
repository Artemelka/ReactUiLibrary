export const formatDictionary = (data) => {
    return data.reduce((result, item) => {
        if (item.enabled) {
            result[item.locale] = item.dictionary;
        }

        return result;
    }, {})
};
