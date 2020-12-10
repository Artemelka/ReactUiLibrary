import { Reducer } from '../types';

export const checkReducesInStore = (reducers: Record<string, Reducer>, reducerName: string | symbol) => {
    // @ts-ignore
    if (!reducers[reducerName]) {
        const name = typeof reducerName === 'symbol' ? reducerName.toString() : reducerName;
        console.error(`Reducer "${name}" not found in store`);
        return false;
    }

    return true;
};
