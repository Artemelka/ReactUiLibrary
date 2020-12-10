import { GetStorePartFromReducer, Store } from '../types';

export const getStorePartFromReducer = ({ action, name, prevStore, reducer }: GetStorePartFromReducer): Store => {
    if (typeof reducer !== 'function') {
        console.error(`Reducer "${name}" must be a function`);
        return {};
    }

    const storePart = reducer(prevStore, action);

    if (typeof storePart !== 'object') {
        console.error(`Reducer "${name}" must be return a plain object`);
        return {};
    }

    return storePart;
};
