import { Action } from '../types';

export const checkAction = (action: Action) => {
    if (typeof action !== 'object' || typeof action === 'function') {
        throw new Error('Action must be a plain object');
    }

    if (!action.type) {
        throw new Error('Action must contain field type');
    }

    if (!action.reducerName) {
        throw new Error('Action must contain field reducerName');
    }
};
