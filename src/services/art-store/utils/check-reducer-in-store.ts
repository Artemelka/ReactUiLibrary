import { Reducer } from '../types';

export const checkReducesInStore = (reducers: Record<string, Reducer>, reducerName: string) => {
    if (!reducers[reducerName]) {
        throw new Error(`Reducer "${reducerName}" not found in store`);
    }
};
