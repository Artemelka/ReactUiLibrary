import { Reducer } from '../types';

export const checkReducer = (reducer: Reducer, name: string): void => {
    if (typeof reducer !== 'function') {
        throw new Error(`Reducer "${name}" must be a function`);
    }

    if (typeof reducer(undefined, { type: 'test' }) !== 'object') {
        throw new Error(`Reducer "${name}" must be return a plain object`);
    }
};
